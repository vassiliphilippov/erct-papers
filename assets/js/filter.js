(() => {
  const list = document.querySelector('.studies__block');
  const banner = document.querySelector('.studies__filter');
  if (!list || !banner) return;

  const bannerTags = banner.querySelector('.filter-banner__tags');
  const bannerCount = banner.querySelector('.filter-banner__count');
  const bannerClear = banner.querySelector('.filter-banner__clear');
  const emptyNote = document.querySelector('.studies__empty');
  const cards = Array.from(list.querySelectorAll('.block-studies__card'));
  const pills = Array.from(list.querySelectorAll('[data-tag]'));
  const baseTitle = document.title;

  // First card pill seen for a tag defines its color class.
  const pillClass = {};
  for (const pill of pills) {
    if (!(pill.dataset.tag in pillClass)) pillClass[pill.dataset.tag] = pill.classList[0];
  }

  const cardTags = (card) => (card.dataset.tags || '').split('|');

  // Selected tags in click order; papers must match ALL of them.
  let active = [];

  const parse = () => {
    const params = new URLSearchParams(location.search);
    const raw = params.get('tags') || params.get('tag') || '';
    return raw.split(',').map((t) => t.trim()).filter((t) => t in pillClass);
  };

  const makeChip = (tag) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'filter-banner__tag ' + (pillClass[tag] || 'tag-default');
    chip.dataset.tag = tag;
    chip.title = 'Remove filter';
    const name = document.createElement('span');
    name.textContent = tag;
    const x = document.createElement('span');
    x.className = 'filter-banner__x';
    x.setAttribute('aria-hidden', 'true');
    x.textContent = '×';
    chip.append(name, x);
    return chip;
  };

  const apply = (tags) => {
    active = Array.from(new Set(tags)).filter((t) => t in pillClass);

    let shown = 0;
    for (const card of cards) {
      const owned = cardTags(card);
      const visible = active.every((tag) => owned.includes(tag));
      card.hidden = !visible;
      if (visible) shown += 1;
    }
    for (const pill of pills) {
      pill.classList.toggle('tag--active', active.includes(pill.dataset.tag));
    }

    banner.hidden = active.length === 0;
    if (active.length) {
      bannerTags.replaceChildren(...active.map(makeChip));
      bannerCount.textContent = shown + ' of ' + cards.length + ' papers';
    }
    if (emptyNote) emptyNote.hidden = !(active.length && shown === 0);
    document.title = active.length ? active.join(' + ') + ' — ' + baseTitle : baseTitle;
  };

  const push = () => {
    const url = active.length
      ? '?tags=' + active.map((t) => encodeURIComponent(t)).join(',')
      : location.pathname;
    history.pushState(null, '', url);
  };

  const toggle = (tag) => {
    apply(active.includes(tag) ? active.filter((t) => t !== tag) : active.concat(tag));
    push();
  };

  list.addEventListener('click', (e) => {
    const pill = e.target.closest('[data-tag]');
    if (!pill || !list.contains(pill)) return;
    e.preventDefault();
    toggle(pill.dataset.tag);
  });

  bannerTags.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-tag]');
    if (chip) toggle(chip.dataset.tag);
  });

  bannerClear.addEventListener('click', () => {
    apply([]);
    push();
  });

  window.addEventListener('popstate', () => apply(parse()));

  apply(parse());
})();
