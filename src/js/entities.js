import {
  elite, scame, hackersgen, catalina, snype, sorint_lab, foppa, coifer, lombardi,
  maccolini, touring, computer_var, valmarecchia, giuliana, bordonchio, photo,
} from '../assets/img';

export const skills = [
  { name: 'HTML', icon: 'fa-brands fa-html5' },
  { name: 'CSS', icon: 'fa-brands fa-css3' },
  { name: 'SCSS', icon: 'fa-brands fa-sass' },
  { name: 'Figma', icon: 'fa-brands fa-figma' },
  { name: 'JavaScript', icon: 'fa-brands fa-js' },
  { name: 'TypeScript', icon: 'fa-brands fa-ts' },
  { name: 'ReactJS', icon: 'fa-brands fa-react' },
  { name: 'VueJs', icon: 'fa-brands fa-vuejs' },
  { name: 'Angular', icon: 'fa-brands fa-angular' },
  { name: 'Twig', icon: '' },
  { name: 'Python', icon: 'fa-brands fa-python' },
  { name: 'Python-Flask', icon: '' },
  { name: 'MySQL', icon: '' },
  { name: 'Flutter', icon: '' },
];

const skill = (name) => {
  const s = skills.find((e) => e.name === name);
  return s ? (
    <li className="skills-item">
      <span>
        <i className={s.icon}></i> {s.name}
      </span>
    </li>
  ) : (
    <li className="skills-item">
      <span>{name}</span>
    </li>
  );
};

export const projects = [
  {
    id: 1,
    date: '2021',
    tab: 0,
    img: elite,
    descriptionIt:
      'Dal 2021 ad oggi, per conto di Sorint.lab lavoro come frontendista sviluppando in ReactJS e come UI/UX Designer utilizzando Figma per Elite (EURONEXT)',
    descriptionEn:
      'From 2021 to today, on behalf of Sorint.lab I work as a frontendist developing in ReactJS and as a UI/UX Designer using Figma for Elite (EURONEXT)',
    skills: (
      <ul className="skills-list">
        {skill('ReactJS')}
        {skill('JavaScript')}
        {skill('TypeScript')}
        {skill('CSS')}
        {skill('SCSS')}
        {skill('Figma')}
        {skill('Twig')}
      </ul>
    ),
  },
  {
    id: 2,
    date: '2021',
    tab: 0,
    img: scame,
    descriptionIt:
      'In aprile 2021 ho lavorato in Sorint.lab per Scame in un progetto sviluppato in Angular chiamato Combi Wizard nel quale mi sono occupato principalmente di bug fixing',
    descriptionEn:
      'In April 2021 I worked in Sorint.lab for Scame in a project developed in Angular called Combi Wizard in which I mainly dealt with bug fixing',
    skills: (
      <ul className="skills-list">
        {skill('Angular')}
        {skill('TypeScript')}
        {skill('CSS')}
      </ul>
    ),
  },
  {
    id: 3,
    date: '2021',
    tab: 0,
    img: hackersgen,
    descriptionIt:
      'Nei mesi di febbraio e marzo 2021 ho lavorato come sviluppatore frontend per Sorint.lab al progetto Hackersgen, un progetto per corsi e lezioni per le scuole fatto in VueJs',
    descriptionEn:
      'In the months of February and March 2021 I worked as a frontend developer for Sorint.lab on the Hackersgen project, a project for courses and lessons for schools done in VueJs',
    skills: (
      <ul className="skills-list">
        {skill('VueJs')}
        {skill('JavaScript')}
        {skill('CSS')}
      </ul>
    ),
  },
  {
    id: 4,
    date: '2021',
    tab: 0,
    img: snype,
    descriptionIt:
      "Durante il mese di gennaio 2021 ho lavorato per Sorint.lab nel progetto Snype, un progetto fatto in Flutter. Snype è un'applicazione per smartphone che permette di effettuare automaticamente il check-in (da qui il nome) alle sale riunioni di Sorint.lab",
    descriptionEn:
      'During the month of January 2021 I worked for Sorint.lab in the Snype project, a project done in Flutter. Snype is a smartphone application that allows you to automatically check-in (hence the name) to Sorint.lab meeting rooms',
    skills: <ul className="skills-list">{skill('Flutter')}</ul>,
  },
  {
    id: 5,
    date: '2020',
    tab: 0,
    img: catalina,
    descriptionIt:
      "Da marzo 2020 a dicembre 2020 ho lavorato per conto di Sorint.lab per un'azienda di marketing chiamata Catalina. Qui ho sviluppato diversi script per la generazione di report o gestione di dati nei database e altre mansioni legate a siti e portali interni",
    descriptionEn:
      'From March 2020 to December 2020 I worked on behalf of Sorint.lab for a marketing company called Catalina. Here I developed several scripts for report generation or data management in databases and other tasks related to internal sites and portals',
    skills: (
      <ul className="skills-list">
        {skill('C#')}
        {skill('MySQL')}
      </ul>
    ),
  },
  {
    id: 6,
    date: '2019',
    tab: 0,
    img: sorint_lab,
    descriptionIt:
      'Per tutto il 2019, fino a febbraio 2020 mi sono occupato di Automation: un ruolo che era stato creato ad hoc per me per automatizzare molti processi di creazione di ticket o di report nel Service Desk di Sorint.lab',
    descriptionEn:
      'Throughout 2019, until February 2020, I was in charge of Automation: a role that had been created ad hoc for me to automate many ticket or report creation processes in the Sorint.lab Service Desk',
    skills: (
      <ul className="skills-list">
        {skill('Python')}
        {skill('Python-Flask')}
        {skill('MySQL')}
      </ul>
    ),
  },
  {
    id: 7,
    date: '2018',
    tab: 0,
    img: sorint_lab,
    descriptionIt:
      'A gennaio 2018 sono stato assunto in Sorint.lab. In questo anno ho svolto la mansione di primo supporto e di monitoraggio dei sistemi per i clienti di Sorint.lab',
    descriptionEn:
      'In January 2018 I was hired in Sorint.lab. In this year I carried out the task of first support and system monitoring for Sorint.lab customers',
    skills: null,
  },
  {
    id: 8,
    date: '2017',
    tab: 0,
    img: foppa,
    descriptionIt:
      'Da settembre 2017 ho lavorato presso Foppa Fustelle srl di Caravaggio con un contratto a tempo determinato con scadenza dicembre 2017, svolgendo le funzioni di fattorino e operaio full time',
    descriptionEn:
      'From September 2017 I worked at Foppa Fustelle srl in Caravaggio with a fixed-term contract expiring in December 2017, performing the functions of delivery boy and full-time worker',
    skills: null,
  },
  {
    id: 9,
    date: '2016',
    tab: 0,
    img: coifer,
    descriptionIt:
      'Da ottobre 2016 a luglio 2017 ho lavorato presso Coifer Srl Soc. Unipersonale, azienda che si occupa di coibentazioni industriali, svolgendo il ruolo di impiegato tecnico. Durante questo impiego ho imparato tutte le basi della coibentazione, a gestire la documentazione per la sicurezza dei lavoratori in cantiere e a disegnare in AutoCad',
    descriptionEn:
      'From October 2016 to July 2017 I worked at Coifer Srl Soc. Unipersonale, a company that deals with industrial insulation, performing the role of technical employee. During this job I learned all the basics of insulation, to manage the documentation for the safety of workers on site and to draw in AutoCad',
    skills: <ul className="skills-list">{skill('AutoCad')}</ul>,
  },
  {
    id: 10,
    date: '2016',
    tab: 0,
    img: lombardi,
    descriptionIt:
      "Da febbraio 2016 a luglio 2016 ho lavorato presso Lombardi Sales come Sales Agent, muovendomi su diverse piste di business fra le quali energia elettrica, gas metano, fotovoltaico, telecomunicazioni Tim e web marketing, nell'attesa di trovare un lavoro stabile",
    descriptionEn:
      'From February 2016 to July 2016 I worked at Lombardi Sales as Sales Agent, moving on various business lines including electricity, methane gas, photovoltaic, TIM telecommunications and web marketing, waiting to find a stable job',
    skills: null,
  },
  {
    id: 11,
    date: '2015',
    tab: 0,
    img: maccolini,
    descriptionIt:
      "Da settembre 2015 a gennaio 2016 ho svolto il Servizio Civile Nazionale che, nel progetto con l'ente al quale sono stato affidato, consiste in attività di animazione e di assistenza nella Casa Residenza per Anziani Istituto Maccolini di Rimini",
    descriptionEn:
      'From September 2015 to January 2016 I carried out the National Civil Service which, in the project with the institution to which I was entrusted, consists of animation and assistance activities in the Home Residence for the Elderly Maccolini Institute in Rimini',
    skills: null,
  },
  {
    id: 12,
    date: '2015',
    tab: 0,
    img: touring,
    descriptionIt:
      "Nelle estati 2014 e 2015 ho lavorato come Apprendista Salvataggio presso l'hotel Touring Spiaggia a Igea Marina. Negli ultimi venti giorni dell'estate 2014, presso lo stesso hotel, dove un cameriere si era licenziato, ho svolto le funzioni di cameriere, data la stagione piovosa e l'esigenza dell'hotel",
    descriptionEn:
      'In the summers of 2014 and 2015 I worked as a Rescue Apprentice at the Touring Spiaggia hotel in Igea Marina. In the last twenty days of summer 2014, at the same hotel, where a waiter had quit, I acted as a waiter, given the rainy season and the need of the hotel',
    skills: null,
  },
  {
    id: 13,
    date: '2014',
    tab: 0,
    img: computer_var,
    descriptionIt:
      'A dicembre 2014 ho lavorato per conto di Computer Var come tecnico informatico nella sostituzione dei computer della banca Carim, sia montando la parte hardware, sia nella migrazione dei dati di ogni computer',
    descriptionEn:
      'In December 2014 I worked on behalf of Computer Var as a computer technician in the replacement of the computers of the Carim bank, both by assembling the hardware part and in the data migration of each computer',
    skills: null,
  },
  {
    id: 14,
    date: '2013',
    tab: 0,
    img: valmarecchia,
    descriptionIt:
      'Nella stagione estiva 2013 ho svolto, presso la Banca di Credito Cooperativo “Valmarecchia” a Rimini, il periodo di tirocinio curricolare previsto dal mio corso di studi universitario',
    descriptionEn:
      'In the 2013 summer season, I carried out the curricular internship period foreseen by my university study course at the "Valmarecchia" Cooperative Credit Bank in Rimini',
    skills: null,
  },
  {
    id: 15,
    date: '2012',
    tab: 0,
    img: giuliana,
    descriptionIt:
      'Da aprile 2012 a settembre 2012 e da settembre 2013 a dicembre 2013 mi sono imbarcato a Cesenatico presso il Motopeschereccio “Giuliana”',
    descriptionEn:
      'From April 2012 to September 2012 and from September 2013 to December 2013 I embarked in Cesenatico on the fishing boat "Giuliana"',
    skills: null,
  },
  {
    id: 16,
    date: '2010',
    tab: 0,
    img: bordonchio,
    descriptionIt:
      'Nelle estati 2010 e 2011 ho lavorato come educatore presso il Centro Estivo di Bordonchio in Bellaria Igea Marina',
    descriptionEn:
      'In the summers 2010 and 2011 I worked as an educator at the Bordonchio Summer Center in Bellaria Igea Marina',
    skills: null,
  },
  {
    id: 17,
    date: '2006',
    tab: 0,
    img: giuliana,
    descriptionIt:
      'Dopo aver superato le prove di nuoto, voga e particolari test sanitari ho ottenuto il Libretto di navigazione di prima categoria presso la Capitaneria di porto di Rimini e mi sono imbarcato a Cesenatico nelle estati del 2006, 2007, 2008 presso il Motopeschereccio “Giuliana”, lavorando come pescatore, nella cernita del pesce e nella guardia al timone',
    descriptionEn:
      'After passing the swimming, rowing and particular health tests, I obtained the first category navigation booklet at the Rimini Port Authority and I embarked in Cesenatico in the summers of 2006, 2007, 2008 at the "Giuliana" fishing boat. working as a fisherman, sorting fish and keeping watch at the wheel',
    skills: null,
  },
  {
    id: 18,
    date: '2005',
    tab: 0,
    img: photo,
    descriptionIt:
      'Nei tre mesi estivi del 2005 ho lavorato presso il negozio fotografico “Foto Superclick” di Apolloni Daniele a Igea Marina, come commesso/apprendista fotografo/elaborazioni fotografiche al computer',
    descriptionEn:
      'In the three summer months of 2005 I worked at Apolloni Daniele\'s photo shop "Foto Superclick" in Igea Marina, as a salesman/apprentice photographer/computer photographic processing',
    skills: null,
  },
];
