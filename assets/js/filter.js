(() => {
  const list = document.querySelector('.studies__block');
  const banner = document.querySelector('.studies__filter');
  if (!list || !banner) return;

  const bannerTag = banner.querySelector('.filter-banner__tag');
  const bannerName = banner.querySelector('.filter-banner__name');
  const bannerCount = banner.querySelector('.filter-banner__count');
  const bannerClear = banner.querySelector('.filter-banner__clear');
  const cards = Array.from(list.querySelectorAll('.block-studies__card'));
  const pills = Array.from(list.querySelectorAll('[data-tag]'));
  const baseTitle = document.title;

  const cardTags = (card) => (card.dataset.tags || '').split('|');

  // Applies the filter to the page and returns the tag that was actually
  // applied (null when the tag is unknown or empty).
  const apply = (tag) => {
    if (tag && !pills.some((pill) => pill.dataset.tag === tag)) tag = null;

    let shown = 0;
    for (const card of cards) {
      const visible = !tag || cardTags(card).includes(tag);
      card.hidden = !visible;
      if (visible) shown += 1;
    }

    let colorClass = 'tag-default';
    for (const pill of pills) {
      const isActive = pill.dataset.tag === tag;
      pill.classList.toggle('tag--active', isActive);
      if (isActive) colorClass = pill.classList[0];
    }

    banner.hidden = !tag;
    if (tag) {
      bannerTag.className = 'filter-banner__tag ' + colorClass;
      bannerName.textContent = tag;
      bannerCount.textContent = shown + ' of ' + cards.length + ' papers';
    }
    document.title = tag ? tag + ' — ' + baseTitle : baseTitle;
    return tag;
  };

  let active = apply(new URLSearchParams(location.search).get('tag'));

  const navigate = (tag) => {
    if (tag === active) return;
    active = apply(tag);
    const url = active ? '?tag=' + encodeURIComponent(active) : location.pathname;
    history.pushState(null, '', url);
  };

  list.addEventListener('click', (e) => {
    const pill = e.target.closest('[data-tag]');
    if (!pill || !list.contains(pill)) return;
    e.preventDefault();
    navigate(pill.dataset.tag === active ? null : pill.dataset.tag);
  });

  bannerTag.addEventListener('click', () => navigate(null));
  bannerClear.addEventListener('click', () => navigate(null));

  window.addEventListener('popstate', () => {
    active = apply(new URLSearchParams(location.search).get('tag'));
  });
})();
