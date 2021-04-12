interface TextHeroProps {
  children: React.ReactNode;
}

const TextHero = ({ children }: TextHeroProps): JSX.Element => (
  <h2 className="text-5xl text-brown">{children}</h2>
);

export default TextHero;
