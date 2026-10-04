import DocViewerPage from './DocViewerPage'
import { peopleDoc } from '../data/documents'

export default function PeoplePage() {
  return <DocViewerPage docConfig={peopleDoc} title="People" />
}
