import { PageHero, Timeline } from '@/components/wedding'
import { wedding } from '@/data/wedding'
export default function SchedulePage() { return <main><PageHero title="The Day" intro="Here's how the celebration will unfold." /><section className="bg-dark px-[clamp(24px,10vw,160px)] py-[clamp(85px,11vw,160px)] text-[#f1e8db]"><Timeline items={wedding.schedule} schedule /></section></main> }
