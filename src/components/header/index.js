import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<header class="ui secondary pointing menu">
		<Link href="/">
			<h1 class="ui header">Jane Doe</h1>
		</Link>
		<nav class="right menu">
			<Link activeClassName="active" class="ui item" href="/blogs">
				Blogs
			</Link>
			<Link activeClassName="active" class="ui item" href="/contact">
				Contact me
			</Link>
		</nav>
	</header>
);

export default Header;
