document.querySelectorAll('.nav-group').forEach((group) => {
  let closeTimer;

  group.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') {
      window.clearTimeout(closeTimer);
      document.querySelectorAll('.nav-group[open]').forEach((openGroup) => {
        if (openGroup !== group) openGroup.removeAttribute('open');
      });
      group.setAttribute('open', '');
    }
  });

  group.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') {
      closeTimer = window.setTimeout(() => group.removeAttribute('open'), 90);
    }
  });
});

document.addEventListener('click', (event) => {
  document.querySelectorAll('.nav-group[open]').forEach((group) => {
    if (!group.contains(event.target)) group.removeAttribute('open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.nav-group[open]').forEach((group) => group.removeAttribute('open'));
  }
});
