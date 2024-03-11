const jugs = [12, 5, 3];

export function getJugSolution(jugs){
    const edges = getNodes(jugs);
    const nodeMap = new Map();
    let index = 0;
    edges.forEach(edge => {
        if (!nodeMap.has(edge.source.toString())) {
            nodeMap.set(edge.source.toString(), index++);
        }
        if (!nodeMap.has(edge.target.toString())) {
            nodeMap.set(edge.target.toString(), index++);
        }
    });
    let nodesData = Array.from(nodeMap.keys()).map(node => node.split(',').map(Number));
    const edgesData = edges.map(edge => ({
        source: nodeMap.get(edge.source.toString()),
        target: nodeMap.get(edge.target.toString())
    }));
    nodesData = calculateDistances(nodesData, edgesData);
    const minimumDistances = findMinimumDistances(nodesData);
    console.log(minimumDistances);
}
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

function getNodes(jugs) {
    let states = [];
    let edges = [];
    const initialState = Array.from({ length: jugs.length }, () => 0);
    states.push(Array.from(initialState));
    let counter = 0;
    while (checkCriteria(states) && counter < 1000){
        states.forEach((state, index) => {
            if (stateCheck(state)){
                for (let i = 0; i < jugs.length; i++) {
                    let localState = Array.from(state);
                    if (localState[i] !== jugs[i]){
                        localState[i] = jugs[i];
                        if (!listExists(localState, states)){
                            states.push(Array.from(localState));
                            edges.push({ source: Array.from(state), target: localState})
                        }
                    }
                }
                for (let i = 0; i < jugs.length; i++) {
                    let localState = Array.from(state);
                    if (localState[i] !== 0) {
                        localState[i] = 0;
                        let nonZeroFound = false; 
                        for (let j = 0; j < jugs.length; j++) {
                            if (localState[j] !== 0) {
                                nonZeroFound = true;
                                break;
                            }
                        }
                        if (nonZeroFound) {
                            if (!listExists(localState, states)) {
                                states.push(Array.from(localState));
                                edges.push({ source: Array.from(state), target: localState })
                            }
                        }
                    }
                }
                for (let i = 0; i < jugs.length; i++) {
                    for (let j = 0; j < jugs.length; j++) {
                        if (i !== j) {
                            let localState = Array.from(state);
                            let transferAmount = Math.min(localState[i], jugs[j] - localState[j]);
                            if (transferAmount !== 0){
                                localState[i] -= transferAmount;
                                localState[j] += transferAmount;
                                edges.push({ source: Array.from(state), target: localState})
                                if (!listExists(localState, states)){
                                    states.push(Array.from(localState));
                                }      
                            }   
                        }
                    }
                }
                state.push(99);
                counter++;
            }
        });
    }
    return edges;
}
function listExists(listToCheck, listOfLists) {
    for (const sublist of listOfLists) {
        if (sublist.length >= listToCheck.length) {
            let match = true;
            for (let i = 0; i < listToCheck.length; i++) {
                if (sublist[i] !== listToCheck[i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }
    return false;
}

function checkCriteria(listOfLists) {
    for (let i = 0; i < listOfLists.length; i++) {
        const lastElement = listOfLists[i][listOfLists[i].length - 1];
        if (lastElement !== 99) {
            return true; // Criteria not met, continue looping
        }
    }
    return false; // Criteria met, stop looping
}
function stateCheck (state){
    if (state[state.length - 1] === 99){
        return false;
    }
    return true;
}

function calculateDistances(nodesData, edgesData) {
    const distances = new Map();
    const queue = [];
    const startNode = Array(jugs.length).fill(0);
    nodesData.forEach((node, index) => {
        distances.set(index, -1);
    });
    distances.set(0, 0);
    queue.push(0);
    while (queue.length > 0) {
        const currentNodeIndex = queue.shift();
        const neighbors = edgesData.filter(edge => edge.source === currentNodeIndex);
        neighbors.forEach(neighbor => {
            const neighborIndex = neighbor.source === currentNodeIndex ? neighbor.target : neighbor.source;
            if (distances.get(neighborIndex) === -1) {
                distances.set(neighborIndex, distances.get(currentNodeIndex) + 1);
                queue.push(neighborIndex);
            }
        });
    }
    nodesData.forEach((node, index) => {
        node.distance = distances.get(index);
    });
    return nodesData;
}

function findMinimumDistances(nodesData) {
    const targets = {};
    nodesData.forEach(node => {
        Object.keys(node).filter(key => Number.isInteger(+key)).forEach(key => {
            const integer = node[key];
            const distance = node.distance;
            if (!(integer in targets) || distance < targets[integer]) {
                targets[integer] = distance;
            }
        });
    });
    return targets;
}