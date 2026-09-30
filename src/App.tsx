import { useRouter } from '@/hooks/useRouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProfilePage from '@/pages/ProfilePage';
import ESDPage from '@/pages/ESDPage';
import ProcessPage from '@/pages/ProcessPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import CollaboratorsPage from '@/pages/CollaboratorsPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  const { path, navigate } = useRouter();

  const renderPage = () => {
    if (path === '/') return <HomePage onNavigate={navigate} />;
    if (path === '/about') return <AboutPage onNavigate={navigate} />;
    if (path === '/profile') return <ProfilePage onNavigate={navigate} />;
    if (path === '/esd') return <ESDPage onNavigate={navigate} />;
    if (path === '/process') return <ProcessPage onNavigate={navigate} />;
    if (path === '/projects') return <ProjectsPage onNavigate={navigate} />;
    if (path.startsWith('/projects/')) {
      const slug = path.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (path === '/our-collaborators') return <CollaboratorsPage onNavigate={navigate} />;
    if (path === '/contact') return <ContactPage onNavigate={navigate} />;
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPath={path} onNavigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
