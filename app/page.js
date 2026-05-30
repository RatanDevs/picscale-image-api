import { headers } from 'next/headers';
import Playground from './Playground';

export default async function Page() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const apiUrl = `${protocol}://${host}/image`;

  return <Playground apiUrl={apiUrl} />;
}
