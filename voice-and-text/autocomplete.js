function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}
//console.clear();

const data = [
"Accident Cover",
"Accidents",
"Accommodation",
"Admission",
"Age-based discount",
"Agreement hospital",
"Ambulance cover",
"Ancillary policy",
"Annual limits",
"Ante Natal - Midwife",
"APRA",
"Appliance",
"Artificial aids",
"Australian Government Rebate",
"Basic private hospital policy",
"Benefit",
"Benefit limits",
"Benefit limitation period",
"Benefits for travel & accommodation (outside of hospital)",
"Blood",
"Blood Glucose Monitors",
"Bone, joint and muscle",
"Book a doctor's appointment",
"Brain and nervous system",
"Brand",
"Bronze cover (hospital)",
"Bupa Dental",
"Bupa offers",
"Bupa Optical",
"Call-out fees",
"Call Bupa",
"Cataracts",
"Chemist delivery",
"Chemotherapy, radiotherapy and immunotherapy for cancer",
"Chinese Herbalism",
"Chiropractic & Osteopathy",
"Classification",
"Closed policy",
"Co-payment",
"Combined limit",
"Combined policy",
"Community rating",
"Compare health cover",
"Corporate health cover",
"Corporate policy",
"Cover for just the basics",
"Cover for peace of mind",
"Cover for pregnancy",
"Cover for tax purposes",
"Covered",
"Daily excess",
"Day surgery",
"Default benefit",
"Department of Health and Aged Care",
"Dependant",
"Dietary",
"Digital Mental Health",
"Diagnostic tests",
"Drugs, dressings and other consumables",
"Ear, nose and throat",
"Elective surgery",
"Eligibility Checking System",
"Emergency Ambulance Services",
"Emergency ambulance",
"Emergency treatment",
"Examples of maximum benefits",
"Excess",
"Exclusions",
"Exercise Physiology",
"Extras",
"Extras only cover",
"Eye (not cataracts)",
"Eye Therapy",
"Family health cover",
"Find a Bupa store",
"Find a provider",
"Frequently asked questions",
"Front-end deductible",
"Fund",
"Gap",
"Gap cover arrangements",
"Gastrointestinal endoscopy",
"General Dental",
"General treatment policy",
"Get a quote",
"Gold hospital cover",
"Health aids",
"Health Aids & Appliances",
"Health insurers",
"Health Management",
"Hearing Aids",
"Heart and vascular system",
"HICAPS",
"Home nursing",
"Hospital only cover",
"Hospital and extras cover",
"Hospital psychiatric services",
"Hospital treatment for which Medicare pays no benefit",
"Implantation of hearing devices",
"Informed financial consent",
"Intensive care",
"Item number",
"Joint reconstructions",
"Joint replacements",
"Jurisdiction",
"Labour ward fees",
"Lifetime Health Cover loading (LHC)",
"Lifetime limit",
"Log in to myBupa",
"Loyalty incentive schemes",
"Lung and chest",
"Major Dental & Endodontic",
"MBS payable item",
"Medical expenses",
"Medical gap",
"Medical service",
"Medicare",
"Medicare Benefits Schedule (MBS)",
"Medicare Levy Surcharge (MLS)",
"Medicare Levy Surcharge exemption",
"Mental Health (incl. Psychology)",
"Minimum benefit",
"Monthly premium",
"Naturopathy",
"Non PBS Pharmaceuticals",
"Non-emergency ambulance",
"Not covered",
"Occupational therapy",
"Occupational Therapy",
"Online Doctor Appointments",
"Online doctors",
"Optical",
"Orthodontic",
"Out-of-pocket costs",
"Overnight excess",
"Palliative care",
"Patient moiety",
"PBS",
"Performance report",
"PHIO",
"Physiotherapy",
"Policy",
"PolicyID",
"Podiatry",
"Portability",
"Pre-existing condition",
"Preferred provider",
"Pregnancy cover",
"Premium",
"Premium discounts",
"Previous name",
"Private Health Insurance Rebate",
"Private hospital",
"Private patient in a private hospital",
"Private room",
"Product code",
"Prostheses (surgically implanted)",
"Provider",
"Psychiatric services",
"Public patient",
"Rate Rise",
"Rebate",
"Rehabilitation",
"Remedial Massage",
"Restricted access insurer",
"Restricted benefits",
"Restricted fund",
"Restricted membership insurer",
"Restrictions",
"Same-day patient",
"Shared room",
"Silver cover (hospital)",
"Singles health cover",
"Special features text",
"Speech Therapy",
"State of the Health Funds Report",
"Student health cover",
"Sub-limits",
"Suspension",
"Tax savings cover",
"Theatre fees",
"Tonsils, adenoids and grommets",
"Travel & Accommodation",
"Treatment exclusions",
"Waiting period",
"What is myBupa",
"What is Blua",
"What is the Australian Government Rebate",
"What is Lifetime Health Cover Loading (LHC)",
"What is excess",
"What are annual limits",
"Where are Bupa stores",
"Where is the closest Hospital",
"Why do my legs hurt"
];


class Autocomplete {
  constructor({
    rootNode,
    inputNode,
    resultsNode,
    searchFn,
    shouldAutoSelect = false,
    onShow = () => {},
    onHide = () => {} } =
  {}) {_defineProperty(this, "handleDocumentClick",

    event => {
      if (event.target === this.inputNode || this.rootNode.contains(event.target)) {
        return;
      }
      this.hideResults();
    });_defineProperty(this, "handleKeyup",

    event => {
      const { key } = event;

      switch (key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'Escape':
        case 'Enter':
          event.preventDefault();
          return;
        default:
          this.updateResults();}


      if (this.hasInlineAutocomplete) {
        switch (key) {
          case 'Backspace':
            return;
          default:
            this.autocompleteItem();}

      }
    });_defineProperty(this, "handleKeydown",

    event => {
      const { key } = event;
      let activeIndex = this.activeIndex;

      if (key === 'Escape') {
        this.hideResults();
        this.inputNode.value = '';
        return;
      }

      if (this.resultsCount < 1) {
        if (this.hasInlineAutocomplete && (key === 'ArrowDown' || key === 'ArrowUp')) {
          this.updateResults();
        } else {
          return;
        }
      }

      const prevActive = this.getItemAt(activeIndex);
      let activeItem;

      switch (key) {
        case 'ArrowUp':
          if (activeIndex <= 0) {
            activeIndex = this.resultsCount - 1;
          } else {
            activeIndex -= 1;
          }
          break;
        case 'ArrowDown':
          if (activeIndex === -1 || activeIndex >= this.resultsCount - 1) {
            activeIndex = 0;
          } else {
            activeIndex += 1;
          }
          break;
        case 'Enter':
          activeItem = this.getItemAt(activeIndex);
          this.selectItem(activeItem);
          return;
        case 'Tab':
          this.checkSelection();
          this.hideResults();
          return;
        default:
          return;}


      event.preventDefault();
      activeItem = this.getItemAt(activeIndex);
      this.activeIndex = activeIndex;

      if (prevActive) {
        prevActive.classList.remove('selected');
        prevActive.setAttribute('aria-selected', 'false');
      }

      if (activeItem) {
        this.inputNode.setAttribute('aria-activedescendant', `autocomplete-result-${activeIndex}`);
        activeItem.classList.add('selected');
        activeItem.setAttribute('aria-selected', 'true');
        if (this.hasInlineAutocomplete) {
          this.inputNode.value = activeItem.innerText;
        }
      } else {
        this.inputNode.setAttribute('aria-activedescendant', '');
      }
    });_defineProperty(this, "handleFocus",

    event => {
      this.updateResults();
    });_defineProperty(this, "handleResultClick",

    event => {
      if (event.target && event.target.nodeName === 'LI') {
        this.selectItem(event.target);
      }
    });_defineProperty(this, "getItemAt",

    index => {
      return this.resultsNode.querySelector(`#autocomplete-result-${index}`);
    });_defineProperty(this, "selectItem",

    node => {
      if (node) {
        this.inputNode.value = node.innerText;
        this.hideResults();
      }
    });_defineProperty(this, "checkSelection",

    () => {
      if (this.activeIndex < 0) {
        return;
      }
      const activeItem = this.getItemAt(this.activeIndex);
      this.selectItem(activeItem);
    });_defineProperty(this, "autocompleteItem",

    event => {
      const autocompletedItem = this.resultsNode.querySelector('.selected');
      const input = this.inputNode.value;
      if (!autocompletedItem || !input) {
        return;
      }

      const autocomplete = autocompletedItem.innerText;
      if (input !== autocomplete) {
        this.inputNode.value = autocomplete;
        this.inputNode.setSelectionRange(input.length, autocomplete.length);
      }
    });_defineProperty(this, "updateResults",

    () => {
      const input = this.inputNode.value;
      const results = this.searchFn(input);

      this.hideResults();
      if (results.length === 0) {
        return;
      }

      this.resultsNode.innerHTML = results.map((result, index) => {
        const isSelected = this.shouldAutoSelect && index === 0;
        if (isSelected) {
          this.activeIndex = 0;
        }
        return `
        <li
          id='autocomplete-result-${index}'
          class='autocomplete-result${isSelected ? ' selected' : ''}'
          role='option'
          ${isSelected ? "aria-selected='true'" : ''}
        >
          ${result}
        </li>
      `;
      }).join('');

      this.resultsNode.classList.remove('hidden');
      this.rootNode.setAttribute('aria-expanded', true);
      this.resultsCount = results.length;
      this.shown = true;
      this.onShow();
    });_defineProperty(this, "hideResults",

    () => {
      this.shown = false;
      this.activeIndex = -1;
      this.resultsNode.innerHTML = '';
      this.resultsNode.classList.add('hidden');
      this.rootNode.setAttribute('aria-expanded', 'false');
      this.resultsCount = 0;
      this.inputNode.setAttribute('aria-activedescendant', '');
      this.onHide();
    });this.rootNode = rootNode;this.inputNode = inputNode;this.resultsNode = resultsNode;this.searchFn = searchFn;this.shouldAutoSelect = shouldAutoSelect;this.onShow = onShow;this.onHide = onHide;this.activeIndex = -1;this.resultsCount = 0;this.showResults = false;this.hasInlineAutocomplete = this.inputNode.getAttribute('aria-autocomplete') === 'both'; // Setup events
    document.body.addEventListener('click', this.handleDocumentClick);this.inputNode.addEventListener('keyup', this.handleKeyup);this.inputNode.addEventListener('keydown', this.handleKeydown);this.inputNode.addEventListener('focus', this.handleFocus);this.resultsNode.addEventListener('click', this.handleResultClick);}}

const search = input => {
  if (input.length < 1) {
    return [];
  }
  return data.filter(item => item.toLowerCase().startsWith(input.toLowerCase()));
};

const autocomplete = new Autocomplete({
  rootNode: document.querySelector('.autocomplete'),
  inputNode: document.querySelector('.autocomplete-input'),
  resultsNode: document.querySelector('.autocomplete-results'),
  searchFn: search,
  shouldAutoSelect: true });

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.autocomplete-input');
  if (input.value.length > 3) {
      const matchedQuery = input.value.replace(/ /g, '+');
      const searchedURL = "https://www.bupa.com.au/utility/search-results?q=" + matchedQuery;
      document.location.href = searchedURL;
      //window.open(searchedURL, "_blank");
  }
});
