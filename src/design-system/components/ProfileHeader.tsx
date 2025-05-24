// Versi dengan props

interface ProfileHeaderProps {
  name: string;
  title: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, title }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-semibold">{name}</h1>
      <p className="text-xl">{title}</p>
    </div>
  );
};

export default ProfileHeader;