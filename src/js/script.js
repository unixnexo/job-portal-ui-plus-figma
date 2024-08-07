/**
 * reset all filter search forms
 */
const clearAllFilterSearch = document.getElementById('filtering-nav-x-svg');
clearAllFilterSearch.addEventListener('click', () => {
    const allFilterSearchForms = document.querySelectorAll('#filter-search-nav form');

    allFilterSearchForms.forEach(form => {
        form.reset();
        const Xsvg = document.querySelector(`#${form.id}-clear-svg`);
        !Xsvg.classList.contains('hidden') ? Xsvg.classList.add('hidden') : None;
        form.setAttribute('data-is-selected', 'false');
    });
    clearAllFilterSearch.classList.add('hidden');
});


/**
 * hide clear all svg when no checkbox is selected
 */
function clearFilters() {
  const forms = document.querySelectorAll('form[data-is-selected]');
  const checkAllForms = () => {
    const allFalse = Array.from(forms).every(form => form.getAttribute('data-is-selected') === 'false');
    if (allFalse) {
      clearAllFilterSearch.classList.add('hidden');
    }
  };

  const callback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-is-selected') {
        checkAllForms();
      }
    }
  };

  const observer = new MutationObserver(callback);
  const config = { attributes: true };
  forms.forEach(form => observer.observe(form, config));
  checkAllForms();
}
clearFilters();


/**
 * toggle X svg to clear all checkboxes related to the form
 */
function toggleXsvgToClearAllCheckboxes(formId, svgId) {
    const form = document.getElementById(formId);
    const clearAll = document.getElementById(svgId);
    const checkboxes = document.querySelectorAll(`#${formId} input[type="checkbox"]`);

    // show/hide the X svg based on numbers of selected checkboxes
    form.addEventListener('input', () => {
        clearAllFilterSearch.classList.remove('hidden');
        let counter = 0;
        checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            counter += 1;
        } 
        });

        // show/hide X svg
        if (counter >= 1) {
            form.setAttribute('data-is-selected', 'true');
            clearAll.classList.remove('hidden');
        } else {
            form.setAttribute('data-is-selected', 'false');
            clearAll.classList.add('hidden');
        }
    });

    // reset the form when clicked on its X svg
    clearAll.addEventListener('click', () => {
        form.reset();
        form.setAttribute('data-is-selected', 'false');
        clearAll.classList.add('hidden');
    });
}
toggleXsvgToClearAllCheckboxes('jobtitle-filter-form', 'jobtitle-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('experience-filter-form', 'experience-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('salary-filter-form', 'salary-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('location-filter-form', 'location-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('gender-filter-form', 'gender-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('conditions-filter-form', 'conditions-filter-form-clear-svg');


/**
 * appearance, functionality of closable side menus
 */
function iconSwitcherForMenus(openSvg, closeSvg, wrapper) {
  const barsSvg = document.getElementById(openSvg);
  const xSvg = document.getElementById(closeSvg);
  const svgWrapper = document.getElementById(wrapper);

  svgWrapper.addEventListener('click', () => {
    if (svgWrapper.getAttribute('data-is-open') === 'false') {
      // changing icons
      barsSvg.classList.add('hidden');
      xSvg.classList.remove('hidden');
      // changing appearance
      document.body.classList.remove('no-overlay');
      svgWrapper.classList.remove('hover:bg-gray-dark/70');
      svgWrapper.classList.add('hover:bg-main-white-ish/60');

      // changing state
      svgWrapper.setAttribute('data-is-open', 'true');

    } else if (svgWrapper.getAttribute('data-is-open') === 'true') {
      // changing icons
      barsSvg.classList.remove('hidden');
      xSvg.classList.add('hidden');
      // changing appearance  
      document.body.classList.add('no-overlay');
      svgWrapper.classList.remove('hover:bg-main-white-ish/60');
      svgWrapper.classList.add('hover:bg-gray-dark/70');

      // changing state
      svgWrapper.setAttribute('data-is-open', 'false');
    }
  });
};
iconSwitcherForMenus('bars-menu-bars-svg', 'bars-menu-x-svg', 'bars-menu-svg-wrapper');
iconSwitcherForMenus('filters-menu-filter-svg', 'filters-menu-x-svg', 'filters-menu-svg-wrapper');


/**
 * search dialog - < md screens
 */
function searchDialog() {
  const dialog = document.getElementById('search-dialog');
  const showButton = document.getElementById('show-search-overlay');
  const closeButton = document.getElementById('close-search-overlay');

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}
searchDialog();




/////***** test *****/////






