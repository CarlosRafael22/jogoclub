import Typography from "@/atoms/Typography";

type Props = {
    name: string;
    code: string;
    logoUrl: string;
    isHomeTeam?: boolean;
}

const TeamNameBadge = ({ name, code, logoUrl, isHomeTeam = false }: Props) => {
    return (
        <div className="flex flex-row h-12 w-24 items-center justify-between">
            {
            isHomeTeam ? (
                <>
                    <img src={logoUrl} alt={name} width={48} height={48} />
                    <Typography variant='body1-bold'>{code}</Typography>
                </>
            ) : (
                <>
                    <Typography variant='body1-bold'>{code}</Typography>
                    <img src={logoUrl} alt={name} width={48} height={48} />
                </>
            )}
        </div>
    );
};

export default TeamNameBadge;