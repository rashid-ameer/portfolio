const FooterSocial = ({ link, title, Icon }) => {
	return (
		<a
			href={link}
			target="_blank"
			className="flex flex-col items-center gap-3 hover:text-blue"
		>
			<Icon className="w-7 h-7 transition-[fill]" />
			<span className="transition-[color]">{title}</span>
		</a>
	);
};

export default FooterSocial;
