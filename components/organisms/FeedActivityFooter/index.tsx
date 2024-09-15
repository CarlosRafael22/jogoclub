import InteractionCount from "@/molecules/InteractionCount";
import TaggedProfiles from "@/molecules/TaggedProfiles";
import { TaggedProfile } from "models/profile";

interface Props {
    celebrateCount?: number
    commentCount?: number
    stadiumCount?: number
    taggedProfiles?: TaggedProfile[]
}

const FeedActivityFooter = ({ celebrateCount, commentCount, stadiumCount, taggedProfiles }: Props) => {
    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
                <InteractionCount name='clap' count={celebrateCount} />
                <InteractionCount name='comment' count={commentCount} />
                <InteractionCount name='stadium' count={stadiumCount} />
            </div>
            <div>
                <TaggedProfiles profiles={taggedProfiles} />
            </div>
        </div>
    )
};

export default FeedActivityFooter;