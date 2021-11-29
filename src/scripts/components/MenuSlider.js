export default class MenuSlider {
  constructor(container){
    this.container = container;
    this._nav = container.querySelector('.navigation');
    this._navsButton = Array.from(this._nav.querySelectorAll('[data-nav]'));
    this._selectSlider = container.querySelector('.navigation-select');
    this._selectSliderActive = this._selectSlider.querySelector('.navigation-select__selected');
    this._selectSliderItems = Array.from(this._selectSlider.querySelectorAll('.navigation-select__value'));
    this._sliders = Array.from(container.querySelectorAll('.carousel'));

    this.wrapperSelectedMenuSlider = (e) => this._selectedMenuSlider.call(this, e);

  }

  _selectedMenuSlider(e){
    this._selectSliderActive.textContent = e.target.textContent;
    this._selectSliderActive.setAttribute('data-nav-active', e.target.getAttribute('data-nav'));
    this._toggleButton(e.target.getAttribute('data-nav'));
    this._toggleSlider(e.target.getAttribute('data-nav'));
  }

  _toggleButton(value){
    this._navsButton.forEach((navButton) => {
      if(navButton.getAttribute('data-nav') != value) {
        navButton.classList.remove('selected');
      } else {
        navButton.classList.add('selected');
      }
    })
  }

  _toggleSlider(value){
      this._sliders.forEach((slider) => {
        if(slider.getAttribute('data-slider') != value){
          slider.classList.add('hidden');
        } else {
          slider.classList.remove('hidden');
        }
      });
  }

  setEventLister(){
    this._navsButton.forEach((navButton) => {
      navButton.addEventListener('click', this.wrapperSelectedMenuSlider);
    });
    this._selectSliderItems.forEach((selectSliderItem) => {
      selectSliderItem.addEventListener('click', this.wrapperSelectedMenuSlider);
    });
  }
}
