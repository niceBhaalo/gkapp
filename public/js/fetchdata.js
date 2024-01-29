import axios from 'axios';
import SparkMD5 from 'spark-md5';

const tilesDataURL = '/get-tiles';
const classicCounterURL = '/get-counter';
const levelDataURL = '/get-levels';
const achievementDataURL = '/get-achievements';
const symbolStorage = document.getElementById('symbols');
export async function metaData() {
    try {
        const response = await axios.post(classicCounterURL);
        if (response.status === 200) {
            const data = response.data;
            const version = data.version;
            const localVersion = getVersionFromLocalStorage();

            if (localVersion !== version || true) {
                const tilesData = await fetchDataAndHash(tilesDataURL, 'tilesData');
                const levelData = await fetchDataAndHash(levelDataURL, 'levelData');
                const achievementData = await fetchDataAndHash(achievementDataURL, 'achievementData');

                storeDataAndHash('tilesData', tilesData);
                storeDataAndHash('levelData', levelData);
                storeDataAndHash('achievementData', achievementData);

                setVersionInLocalStorage(version);
            } else {
                const tilesHashMatch = checkHash('tilesData');
                const levelHashMatch = checkHash('levelData');
                const achievementHashMatch = checkHash('achievementData');

                if (!tilesHashMatch || !levelHashMatch || !achievementHashMatch) {
                    const tilesData = await fetchDataAndHash(tilesDataURL, 'tilesData');
                    const levelData = await fetchDataAndHash(levelDataURL, 'levelData');
                    const achievementData = await fetchDataAndHash(achievementDataURL, 'achievementData');

                    storeDataAndHash('tilesData', tilesData);
                    storeDataAndHash('levelData', levelData);
                    storeDataAndHash('achievementData', achievementData);       
                }
            }

            const counterValue = data.counter;

        } else {
            console.error('Failed to fetch counter value:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching counter value:', error);
    }
}

async function fetchDataAndHash(url, storageKey) {
    try {
        const response = await axios.post(url);
        if (response.status === 200) {
            const { data, hash } = response.data;
            return { data, hash };
        } else {
            console.error(`Failed to fetch data from ${url}:`, response.statusText);
            return { data: null, hash: null };
        }
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return { data: null, hash: null };
    }
}


function storeDataAndHash(storageKey, { data, hash }) {
    if (data !== null && hash !== null) {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(storageKey, serializedData);
        localStorage.setItem(`${storageKey}Hash`, hash);
    }
}

function checkHash(storageKey) {
    const storedHash = localStorage.getItem(`${storageKey}Hash`);
    const storedData = localStorage.getItem(storageKey);
    if (storedHash && storedData) {
        const recalculatedHash = SparkMD5.hash(storedData);
        return storedHash === recalculatedHash;
    }
    return false;
}

function getVersionFromLocalStorage() {
    return localStorage.getItem('version');
}

function setVersionInLocalStorage(newValue) {
    localStorage.setItem('version', newValue);
}

export async function loadIcons() {
  try {
    const response = await axios.get('../icons/achievementspritesheet.svg');
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = response.data;
    symbolStorage.append(tempContainer);

  } catch (error) {
    console.error('Error loading icons:', error);
  }
}