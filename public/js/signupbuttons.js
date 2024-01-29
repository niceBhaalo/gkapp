export function signUpButtons(topContainer){
    const signUpButton = document.createElement('button');
    signUpButton.classList.add('sign-up-button');
    signUpButton.textContent = 'Sign Up';
    signUpButton.addEventListener('click', () => {
        console.log('Sign Up clicked');
    });

    const logInButton = document.createElement('button');
    logInButton.classList.add('sign-up-button');
    logInButton.textContent = 'Log In';

    logInButton.addEventListener('click', () => {
        console.log('Log In clicked');
    });
    topContainer.appendChild(signUpButton);
    topContainer.appendChild(logInButton);
}