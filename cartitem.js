//Creating Cart-item component it's more usefull and easy way to write same codes in html ;)
const template = document.createElement('div');

template.innerHTML = `
    <header>
    <header id="header">
    <div class="images w-full flex justify-between gap-[10px] mb-[15px]">
        <div
            class="image-primary relative w-auto w-[75%] overflow-hidden rounded-[20px] h-[229px]">
            <img src="https://s3-alpha-sig.figma.com/img/67b8/1863/cb9aff7f286bf6afe8cfe6cc14eb5385?Expires=1690761600&Signature=BiXrE8EqeXnl-cVOXjuLI3aEdnocK4FSLPctJs7r0yPVrvKMMAWMeYQ2i1aIYyZy8Vi9TZYXEU0QmNRGOlWODE8GVATbW6erktW3t1Ftdlj-r8ZLoicR7JpQV1QVBsv1Pf2pGpe6673J7ZcIJWnI6LVo11eNxSiDokzooWwGZbi2gpgPzSqfuUgJ1302~hWwmrQeneXvxn2THHcepV7MYOrS0WzZzhbCHVgl8CquKauKX158NuPhPtc4OR1LvElorhMOPWIpjCVro~PgrUp3MYn~inRMW5D~v7ur~aBZVrZ-pWg5qlFxGCmJpkmHflHFcESZb~CPnRSH4MvHTPbIqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="/" class="w-full h-full object-cover">
            <span
                class="absolute top-[10px] right-[11px] rounded-[50px] text py-[3px] px-[13px] bg-[#FD3541] text-center text-white text-xs font-semibold leading-[18px]">Примерна
                снимка
            </span>
            <div class="icon absolute bottom-[14px] right-[16px]">
                <img src="./assets/heart.png" alt="/">
            </div>
        </div>
        <div class="images-secondary w-[25%] flex flex-col gap-[10px]">
            <div class="image rounded-[10px] h-[69px]  overflow-hidden">
                <img src="https://s3-alpha-sig.figma.com/img/67b8/1863/cb9aff7f286bf6afe8cfe6cc14eb5385?Expires=1690761600&Signature=BiXrE8EqeXnl-cVOXjuLI3aEdnocK4FSLPctJs7r0yPVrvKMMAWMeYQ2i1aIYyZy8Vi9TZYXEU0QmNRGOlWODE8GVATbW6erktW3t1Ftdlj-r8ZLoicR7JpQV1QVBsv1Pf2pGpe6673J7ZcIJWnI6LVo11eNxSiDokzooWwGZbi2gpgPzSqfuUgJ1302~hWwmrQeneXvxn2THHcepV7MYOrS0WzZzhbCHVgl8CquKauKX158NuPhPtc4OR1LvElorhMOPWIpjCVro~PgrUp3MYn~inRMW5D~v7ur~aBZVrZ-pWg5qlFxGCmJpkmHflHFcESZb~CPnRSH4MvHTPbIqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="/">
            </div>
            <div class="image rounded-[10px] h-[69px] overflow-hidden">
                <img src="https://s3-alpha-sig.figma.com/img/67b8/1863/cb9aff7f286bf6afe8cfe6cc14eb5385?Expires=1690761600&Signature=BiXrE8EqeXnl-cVOXjuLI3aEdnocK4FSLPctJs7r0yPVrvKMMAWMeYQ2i1aIYyZy8Vi9TZYXEU0QmNRGOlWODE8GVATbW6erktW3t1Ftdlj-r8ZLoicR7JpQV1QVBsv1Pf2pGpe6673J7ZcIJWnI6LVo11eNxSiDokzooWwGZbi2gpgPzSqfuUgJ1302~hWwmrQeneXvxn2THHcepV7MYOrS0WzZzhbCHVgl8CquKauKX158NuPhPtc4OR1LvElorhMOPWIpjCVro~PgrUp3MYn~inRMW5D~v7ur~aBZVrZ-pWg5qlFxGCmJpkmHflHFcESZb~CPnRSH4MvHTPbIqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="/">
            </div>
        </div>
    </div>
    </header>

`


class CartItem extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}
customElements.define('cart-item', CartItem);
//<cart-item>