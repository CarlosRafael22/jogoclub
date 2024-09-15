import Icon from '@/atoms/Icon';
import { INTERACTION_ICONS_MAP } from '@/atoms/Icon/constants';

interface Props {
    name: keyof typeof INTERACTION_ICONS_MAP
    count?: number
}

const InteractionCount = ({ name, count }: Props) => {
    return (
        <div className='flex flex-row gap-1'>
            <Icon name={name} />
            {!!count && <p>{count}</p>}
        </div>
    )
};

export default InteractionCount;