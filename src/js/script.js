/**
 * toggle X svg to clear all checkboxes related to the form
 */
function toggleXsvgToClearAllCheckboxes(formId, svgId) {
    const form = document.getElementById(formId);
    const clearAll = document.getElementById(svgId);
    const checkboxes = document.querySelectorAll(`#${formId} input[type="checkbox"]`);
    form.addEventListener('input', () => {
        let counter = 0;
        checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            counter += 1;
        } 
        });

        // show/hide X svg
        if (counter >= 1) {
            clearAll.classList.remove('hidden');
        } else {
            clearAll.classList.add('hidden');
        }
    });
}
toggleXsvgToClearAllCheckboxes('jobtitle-filter-form', 'jobtitle-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('experience-filter-form', 'experience-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('salary-filter-form', 'salary-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('location-filter-form', 'location-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('gender-filter-form', 'gender-filter-form-clear-svg');
toggleXsvgToClearAllCheckboxes('conditions-filter-form', 'conditions-filter-form-clear-svg');


/**
 * reset all filter search forms
 */
const allFilterSearchForms = document.querySelectorAll('#filter-search-nav form');
const clearAllFilterSearch = document.getElementById('filtering-nav-x-svg');

clearAllFilterSearch.addEventListener('click', () => {
    allFilterSearchForms.forEach(form => {
        form.reset();
        const Xsvg = document.querySelector(`#${form.id}-clear-svg`);
        !Xsvg.classList.contains('hidden') ? Xsvg.classList.add('hidden') : None;
    });
});


/////***** test *****/////


