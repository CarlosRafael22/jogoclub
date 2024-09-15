import Icon from '@/atoms/Icon';
import { TaggedProfile } from 'models/profile';

const THRESHOLD = 3;

interface TaggedProfilesProps {
    profiles?: TaggedProfile[]
}

const TaggedProfiles = ({ profiles }: TaggedProfilesProps) => {
    const profilesCount = profiles?.length;
    if (!profiles || profilesCount == 0) return null;

    const profilesAboveThreshold = profilesCount - THRESHOLD;
    const shouldShowAboveThresholdCount = profilesAboveThreshold > 0;

    const profilesToBeShown = profiles.slice(0, THRESHOLD);

    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-row">
                {profilesToBeShown.map(({ id }) => (
                    <Icon name="avatar" key={id} />
                ))}
            </div>
            {shouldShowAboveThresholdCount && <p>+{profilesAboveThreshold}</p>}
        </div>
    )
}

export default TaggedProfiles;