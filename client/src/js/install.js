const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // stash the event so it can be triggered later
  window.deferredPrompt = event;

  // makes the install button visible by default
  butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  // prompts user to install
  promptEvent.prompt();
  window.deferredPrompt = null;

  // hides the install button on install
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
