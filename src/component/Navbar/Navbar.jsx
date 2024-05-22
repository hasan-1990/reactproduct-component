import "./Navbar.css";
function Navbar () {
    return (
        <>
            <nav className="navb">
            <ul class="list">
<li class="list-item"><a href="index.html" class="list-link">خانه</a></li>
<li class="list-item">
<a href="index.html" class="list-link">دسته بندی ها</a>
 <ul class="sublist">
<li class="sublist-item"><a href="google.com" class="sublist-link">فرانت اند</a></li>
 <li class="sublist-item"><a href="google.com" class="sublist-link">بک اند</a></li>
 <li class="sublist-item"><a href="google.com" class="sublist-link">امنیت</a></li>
</ul>
</li>
<li class="list-item"><a href="index.html" class="list-link">درباره ما</a></li>
<li class="list-item"><a href="index.html" class="list-link">ارتباط با ما</a></li>
</ul>
            </nav>
        </>
    )
}
export default Navbar;