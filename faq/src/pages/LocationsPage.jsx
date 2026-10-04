import DocViewerPage from './DocViewerPage'
import { locationsDoc } from '../data/documents'

export default function LocationsPage() {
  return <DocViewerPage docConfig={locationsDoc} title="Locations" />
}
