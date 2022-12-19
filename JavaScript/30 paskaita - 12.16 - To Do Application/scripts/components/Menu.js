export default class Menu{
  constructor(){
    return this.render();
  }

  render = () => {
    this.nav = document.createElement('nav');

    this.navCenter = document.createElement('div');
    this.navCenter.classList.add('nav-center');
    this.nav.append(this.navCenter);
    
    this.navHeader = document.createElement('div');
    this.navHeader.classList.add('nav-header');
    this.logoHeading = document.createElement('h4');
    this.logoHeading.classList.add('logo');
    this.text = document.createTextNode('Best ');
    this.logoHeading.append(this.text);
    this.span = document.createElement('span');
    this.text = document.createTextNode('ToDo ');
    this.span.append(this.text);
    this.logoHeading.append(this.span);
    this.text = document.createTextNode('App');
    this.logoHeading.append(this.text);
    this.navHeader.append(this.logoHeading);
    this.navCenter.append(this.navHeader);

    this.navUl = document.createElement('ul');
    this.navUl.classList.add('social-icons');
    const socials = ['facebook', 'twitter', 'linkedin'];
    socials.forEach(social => {
      this.li = document.createElement('li');
      this.a = document.createElement('a');
      this.a.setAttribute('href', `https://www.${social}.com`);
      this.li.append(this.a);
      this.i = document.createElement('i');
      this.i.setAttribute('class', `fab fa-${social}`);
      this.a.append(this.i);
      this.navUl.append(this.li);
    });
    this.navCenter.append(this.navUl);

    return this.nav;
  }
}