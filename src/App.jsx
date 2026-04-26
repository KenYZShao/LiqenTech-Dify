import { useTranslation } from 'react-i18next';

const sections = [
  { key: 'enterprise', title: 'enterpriseTitle', desc: 'enterpriseDesc' },
  { key: 'scenarios', title: 'scenariosTitle', desc: 'scenariosDesc' },
  { key: 'rag', title: 'ragTitle', desc: 'ragDesc' },
  { key: 'training', title: 'trainingTitle', desc: 'trainingDesc' },
  { key: 'compute', title: 'computeTitle', desc: 'computeDesc' },
  { key: 'security', title: 'securityTitle', desc: 'securityDesc' },
];

const stats = [
  { value: '0k', label: 'githubStars' },
  { value: '0', label: 'modelSupport' },
  { value: '0+', label: 'pluginCount' },
  { value: '0m', label: 'smartAgents' },
];

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">JOTO.AI</div>
        <nav>
          <a href="#home">{t('navHome')}</a>
          <a href="#solutions">{t('navSolutions')}</a>
          <a href="#features">{t('navFeatures')}</a>
          <a href="#contact">{t('navContact')}</a>
        </nav>
        <div className="lang-switcher">
          <button onClick={() => changeLang('zh')} className={i18n.language === 'zh' ? 'active' : ''}>中文</button>
          <button onClick={() => changeLang('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">JOTO.AI</span>
            <h1>{t('heroTitle')}</h1>
            <p>{t('heroDesc')}</p>
            <div className="hero-actions">
              <button>{t('heroActionPrimary')}</button>
              <button className="outline">{t('heroActionSecondary')}</button>
            </div>
          </div>
        </section>

        <section className="overview" id="solutions">
          <h2>{t('overviewTitle')}</h2>
          <p>{t('overviewDesc')}</p>
          <div className="overview-grid">
            {sections.map((section) => (
              <article key={section.key} className="card">
                <h3>{t(section.title)}</h3>
                <p>{t(section.desc)}</p>
                <a href="#">{t('readMore')}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{t(stat.label)}</span>
            </div>
          ))}
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy">
            <h2>{t('contactTitle')}</h2>
            <p>{t('contactDesc')}</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder={t('formName')} />
            <input type="text" placeholder={t('formCompany')} />
            <input type="email" placeholder={t('formEmail')} />
            <input type="tel" placeholder={t('formPhone')} />
            <textarea rows="4" placeholder={t('formMessage')}></textarea>
            <button type="submit">{t('formSubmit')}</button>
          </form>
        </section>
      </main>

      <footer>
        <div>{t('footerCopy')}</div>
        <div className="footer-links">
          <a href="#">{t('footerLink1')}</a>
          <a href="#">{t('footerLink2')}</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
