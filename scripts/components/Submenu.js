export default class Submenu {
  constructor(menus){
    this._menus = menus;
    this._menuContainers = this._menus.map((menu) => {
      return Array.from(menu.querySelectorAll('.menu__submenu'));
    }).flat();
    this._menuLinks = this._menuContainers.map((menuContainer) => {
      return Array.from(menuContainer.querySelectorAll('.menu__link'));
    }).flat();
    this._menuSubmenu = this._menuContainers.map((menuContainer) => {
      return Array.from(menuContainer.querySelectorAll('.submenu'));
    }).flat();

    this.wrapperToggleSubmenu = (e) => this._toggleSubmenu.call(this, e);
    this.wrapperOpenLink = (e) => this._openLink.call(this, e);
  }

  _toggleSubmenu(e){
    this._menus
    if(this._menuLinks.includes(e.target)){
      e.preventDefault();
      this._deleteActive(e.target);
      e.target.classList.toggle('active');
      e.target.nextElementSibling.classList.toggle('active');
    }else{
      this._deleteActive('false');
    }
  }

  _deleteActive(link){
    if(link === 'false'){
      this._menuSubmenu.forEach((submenuItem) => {
        submenuItem.classList.remove('active');
      });
      this._menuLinks.forEach((menuLink) => {
        menuLink.classList.remove('active');
      });
    }else{
      const otherLinks = this._menuLinks.filter(menuLink => menuLink != link);
      otherLinks.forEach((oherLink) => {
        oherLink.classList.remove('active');
        oherLink.nextElementSibling.classList.remove('active');
      })
    }

  }

  _openLink(e){
    document.location.href = e.srcElement.href;
  }

  setEventLister(){
    document.addEventListener('click', this.wrapperToggleSubmenu);
    this._menuLinks.forEach((link) =>{
      link.addEventListener('dblclick', this.wrapperOpenLink);
    });
  }
}
