import { createFileRoute, Outlet } from '@tanstack/react-router';
import { importedComponent as ImportedComponent, importedLoader } from '../shared/imported';
export function Layout() {
  return <main>
      <header style={{
      height: HEADER_HEIGHT
    }}>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </header>
      <ImportedComponent />
      <Outlet />
    </main>;
}
export const Route = createFileRoute('/_layout')({
  component: Layout,
  loader: importedLoader
});
const HEADER_HEIGHT = '63px';
export const SIDEBAR_WIDTH = '150px';