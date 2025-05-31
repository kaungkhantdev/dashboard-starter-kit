import LogoPhoto from '@/assets/logo.svg'

export const Logo = ({ className }: { className?: string}) => {
  return (
    <div>
      <img
        src={LogoPhoto}
        alt="Logo"
        className={className}
      />
    </div>
  );
};