"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";

export default function PrivacyPolicyPage() {
	const [language, setLanguage] = useState("de");

	return (
		<div className="min-h-screen bg-gray-900">
			<Header language={language} setLanguage={setLanguage} />
			<main className="container mx-auto px-4 py-20">
				<h1 className="text-2xl font-bold mb-8 text-orange-500">
					{language === "en" ? "Privacy Policy" : "Datenschutzerklärung"}
				</h1>
				<div className="text-white space-y-4">
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m716">
						Präambel
					</h2>
					<p>
						Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
						aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
						auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in
						welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle
						von uns durchgeführten Verarbeitungen personenbezogener Daten,
						sowohl im Rahmen der Erbringung unserer Leistungen als auch
						insbesondere auf unseren Webseiten, in mobilen Applikationen sowie
						innerhalb externer Onlinepräsenzen, wie z. B. unserer
						Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
						"Onlineangebot").
					</p>
					<p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
					<p>Stand: 8. Januar 2025</p>
					<h2>Inhaltsübersicht</h2>{" "}
					<ul className="index">
						<li>
							<a className="index-link" href="#m716">
								Präambel
							</a>
						</li>
						<li>
							<a className="index-link" href="#m3">
								Verantwortlicher
							</a>
						</li>
						<li>
							<a className="index-link" href="#mOverview">
								Übersicht der Verarbeitungen
							</a>
						</li>
						<li>
							<a className="index-link" href="#m2427">
								Maßgebliche Rechtsgrundlagen
							</a>
						</li>
						<li>
							<a className="index-link" href="#m27">
								Sicherheitsmaßnahmen
							</a>
						</li>
						<li>
							<a className="index-link" href="#m25">
								Übermittlung von personenbezogenen Daten
							</a>
						</li>
						<li>
							<a className="index-link" href="#m24">
								Internationale Datentransfers
							</a>
						</li>
						<li>
							<a className="index-link" href="#m12">
								Allgemeine Informationen zur Datenspeicherung und Löschung
							</a>
						</li>
						<li>
							<a className="index-link" href="#m10">
								Rechte der betroffenen Personen
							</a>
						</li>
						<li>
							<a className="index-link" href="#m225">
								Bereitstellung des Onlineangebots und Webhosting
							</a>
						</li>
						<li>
							<a className="index-link" href="#m182">
								Kontakt- und Anfrageverwaltung
							</a>
						</li>
						<li>
							<a className="index-link" href="#m17">
								Newsletter und elektronische Benachrichtigungen
							</a>
						</li>
						<li>
							<a className="index-link" href="#m638">
								Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon
							</a>
						</li>
						<li>
							<a className="index-link" href="#m136">
								Präsenzen in sozialen Netzwerken (Social Media)
							</a>
						</li>
						<li>
							<a className="index-link" href="#m15">
								Änderung und Aktualisierung
							</a>
						</li>
						<li>
							<a className="index-link" href="#m42">
								Begriffsdefinitionen
							</a>
						</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m3">
						Verantwortlicher
					</h2>
					<p>
						Nils Börner
						<br />
						Taubenstraße 181541 München
					</p>
					<p>Vertretungsberechtigte Personen: Jago Wahl-Schwentker</p>
					<p>E-Mail-Adresse: contact@trans-load.de</p>
					<p>Telefon: +4915258549146</p>
					<p>
						Impressum:{" "}
						<a href="https://www.trans-load.de/impressum" target="_blank">
							https://www.trans-load.de/impressum
						</a>
					</p>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="mOverview">
						Übersicht der Verarbeitungen
					</h2>
					<p>
						Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
						und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
						betroffenen Personen.
					</p>
					<h3>Arten der verarbeiteten Daten</h3>
					<ul>
						<li>Bestandsdaten.</li>
						<li>Kontaktdaten.</li>
						<li>Inhaltsdaten.</li>
						<li>Nutzungsdaten.</li>
						<li>Meta-, Kommunikations- und Verfahrensdaten.</li>
						<li>Protokolldaten.</li>
					</ul>
					<h3>Kategorien betroffener Personen</h3>
					<ul>
						<li>Kommunikationspartner.</li>
						<li>Nutzer.</li>
					</ul>
					<h3>Zwecke der Verarbeitung</h3>
					<ul>
						<li>Kommunikation.</li>
						<li>Sicherheitsmaßnahmen.</li>
						<li>Direktmarketing.</li>
						<li>Organisations- und Verwaltungsverfahren.</li>
						<li>Feedback.</li>
						<li>Marketing.</li>
						<li>
							Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
						</li>
						<li>Informationstechnische Infrastruktur.</li>
						<li>Öffentlichkeitsarbeit.</li>
						<li>Absatzförderung.</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m2427">
						Maßgebliche Rechtsgrundlagen
					</h2>
					<p>
						<strong>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>Im
						Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
						DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte
						nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
						nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
						Sitzland gelten können. Sollten ferner im Einzelfall speziellere
						Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
						Datenschutzerklärung mit.
					</p>
					<ul>
						<li>
							<strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> -
							Die betroffene Person hat ihre Einwilligung in die Verarbeitung
							der sie betreffenden personenbezogenen Daten für einen
							spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
						</li>
						<li>
							<strong>
								Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S.
								1 lit. b) DSGVO)
							</strong>{" "}
							- Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
							Vertragspartei die betroffene Person ist, oder zur Durchführung
							vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
							betroffenen Person erfolgen.
						</li>
						<li>
							<strong>
								Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
							</strong>{" "}
							- die Verarbeitung ist zur Wahrung der berechtigten Interessen des
							Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass
							die Interessen, Grundrechte und Grundfreiheiten der betroffenen
							Person, die den Schutz personenbezogener Daten verlangen, nicht
							überwiegen.
						</li>
					</ul>
					<p>
						<strong>Nationale Datenschutzregelungen in Deutschland: </strong>
						Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale
						Regelungen zum Datenschutz in Deutschland. Hierzu gehört
						insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener
						Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG).
						Das BDSG enthält insbesondere Spezialregelungen zum Recht auf
						Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur
						Verarbeitung besonderer Kategorien personenbezogener Daten, zur
						Verarbeitung für andere Zwecke und zur Übermittlung sowie
						automatisierten Entscheidungsfindung im Einzelfall einschließlich
						Profiling. Ferner können Landesdatenschutzgesetze der einzelnen
						Bundesländer zur Anwendung gelangen.
					</p>
					<p>
						<strong>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>
						Diese Datenschutzhinweise dienen sowohl der Informationserteilung
						nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung
						(DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund
						der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe
						der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG
						verwendeten Begriffe „Bearbeitung" von „Personendaten",
						"überwiegendes Interesse" und "besonders schützenswerte
						Personendaten" werden die in der DSGVO verwendeten Begriffe
						„Verarbeitung" von „personenbezogenen Daten" sowie "berechtigtes
						Interesse" und "besondere Kategorien von Daten" verwendet. Die
						gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung
						des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
					</p>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m27">
						Sicherheitsmaßnahmen
					</h2>
					<p>
						Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
						Berücksichtigung des Stands der Technik, der Implementierungskosten
						und der Art, des Umfangs, der Umstände und der Zwecke der
						Verarbeitung sowie der unterschiedlichen
						Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
						Rechte und Freiheiten natürlicher Personen geeignete technische und
						organisatorische Maßnahmen, um ein dem Risiko angemessenes
						Schutzniveau zu gewährleisten.
					</p>
					<p>
						Zu den Maßnahmen gehören insbesondere die Sicherung der
						Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
						Kontrolle des physischen und elektronischen Zugangs zu den Daten als
						auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
						Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben
						wir Verfahren eingerichtet, die eine Wahrnehmung von
						Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
						Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den
						Schutz personenbezogener Daten bereits bei der Entwicklung bzw.
						Auswahl von Hardware, Software sowie Verfahren entsprechend dem
						Prinzip des Datenschutzes, durch Technikgestaltung und durch
						datenschutzfreundliche Voreinstellungen.
					</p>
					<p>
						Sicherung von Online-Verbindungen durch
						TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der
						Nutzer, die über unsere Online-Dienste übertragen werden, vor
						unerlaubten Zugriffen zu schützen, setzen wir auf die
						TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und
						Transport Layer Security (TLS) sind die Eckpfeiler der sicheren
						Datenübertragung im Internet. Diese Technologien verschlüsseln die
						Informationen, die zwischen der Website oder App und dem Browser des
						Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die
						Daten vor unbefugtem Zugriff geschützt sind. TLS, als die
						weiterentwickelte und sicherere Version von SSL, gewährleistet, dass
						alle Datenübertragungen den höchsten Sicherheitsstandards
						entsprechen. Wenn eine Website durch ein SSL-/TLS-Zertifikat
						gesichert ist, wird dies durch die Anzeige von HTTPS in der URL
						signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre
						Daten sicher und verschlüsselt übertragen werden.
					</p>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m25">
						Übermittlung von personenbezogenen Daten
					</h2>
					<p>
						Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es
						vor, dass diese an andere Stellen, Unternehmen, rechtlich
						selbstständige Organisationseinheiten oder Personen übermittelt
						beziehungsweise ihnen gegenüber offengelegt werden. Zu den
						Empfängern dieser Daten können z. B. mit IT-Aufgaben beauftragte
						Dienstleister gehören oder Anbieter von Diensten und Inhalten, die
						in eine Website eingebunden sind. In solchen Fällen beachten wir die
						gesetzlichen Vorgaben und schließen insbesondere entsprechende
						Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit
						den Empfängern Ihrer Daten ab.
					</p>
					<p>
						Datenübermittlung innerhalb der Organisation: Wir können
						personenbezogene Daten an andere Abteilungen oder Einheiten
						innerhalb unserer Organisation übermitteln oder ihnen den Zugriff
						darauf gewähren. Sofern die Datenweitergabe zu administrativen
						Zwecken erfolgt, beruht sie auf unseren berechtigten
						unternehmerischen und betriebswirtschaftlichen Interessen oder
						erfolgt, sofern sie zur Erfüllung unserer vertragsbezogenen
						Verpflichtungen erforderlich ist beziehungsweise wenn eine
						Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis
						vorliegt.
					</p>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m24">
						Internationale Datentransfers
					</h2>
					<p>
						Datenverarbeitung in Drittländern: Sofern wir Daten in einem
						Drittland (d. h., außerhalb der Europäischen Union (EU), des
						Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die
						Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder
						der Offenlegung bzw. Übermittlung von Daten an andere Personen,
						Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang
						mit den gesetzlichen Vorgaben. Sofern das Datenschutzniveau in dem
						Drittland mittels eines Angemessenheitsbeschlusses anerkannt wurde
						(Art. 45 DSGVO), dient dieser als Grundlage des Datentransfers. Im
						Übrigen erfolgen Datentransfers nur dann, wenn das Datenschutzniveau
						anderweitig gesichert ist, insbesondere durch
						Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) DSGVO),
						ausdrückliche Einwilligung oder im Fall vertraglicher oder
						gesetzlich erforderlicher Übermittlung (Art. 49 Abs. 1 DSGVO). Im
						Übrigen teilen wir Ihnen die Grundlagen der Drittlandübermittlung
						bei den einzelnen Anbietern aus dem Drittland mit, wobei die
						Angemessenheitsbeschlüsse als Grundlagen vorrangig gelten.
						Informationen zu Drittlandtransfers und vorliegenden
						Angemessenheitsbeschlüssen können dem Informationsangebot der
						EU-Kommission entnommen werden:{" "}
						<a
							href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de"
							target="_blank"
						>
							https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de.
						</a>{" "}
						Im Rahmen des sogenannten „Data Privacy Framework" (DPF) hat die
						EU-Kommission das Datenschutzniveau ebenfalls für bestimmte
						Unternehmen aus den USA im Rahmen der Angemessenheitsbeschlusses vom
						10.07.2023 als sicher anerkannt. Die Liste der zertifizierten
						Unternehmen als auch weitere Informationen zu dem DPF können Sie der
						Website des Handelsministeriums der USA unter{" "}
						<a href="https://www.dataprivacyframework.gov/" target="_blank">
							https://www.dataprivacyframework.gov/
						</a>{" "}
						(in Englisch) entnehmen. Wir informieren Sie im Rahmen der
						Datenschutzhinweise, welche von uns eingesetzten Diensteanbieter
						unter dem Data Privacy Framework zertifiziert sind.
					</p>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m12">
						Allgemeine Informationen zur Datenspeicherung und Löschung
					</h2>
					<p>
						Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den
						gesetzlichen Bestimmungen, sobald die zugrundeliegenden
						Einwilligungen widerrufen werden oder keine weiteren rechtlichen
						Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in
						denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten
						nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen,
						wenn gesetzliche Pflichten oder besondere Interessen eine längere
						Aufbewahrung oder Archivierung der Daten erfordern.
					</p>
					<p>
						Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen
						Gründen aufbewahrt werden müssen oder deren Speicherung notwendig
						ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer
						natürlicher oder juristischer Personen, entsprechend archiviert
						werden.
					</p>
					<p>
						Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur
						Aufbewahrung und Löschung von Daten, die speziell für bestimmte
						Verarbeitungsprozesse gelten.
					</p>
					<p>
						Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen
						eines Datums, ist stets die längste Frist maßgeblich.
					</p>
					<p>
						Beginnt eine Frist nicht ausdrücklich zu einem bestimmten Datum und
						beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende
						des Kalenderjahres, in dem das fristauslösende Ereignis eingetreten
						ist. Im Fall laufender Vertragsverhältnisse, in deren Rahmen Daten
						gespeichert werden, ist das fristauslösende Ereignis der Zeitpunkt
						des Wirksamwerdens der Kündigung oder sonstige Beendigung des
						Rechtsverhältnisses.
					</p>
					<p>
						Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck,
						sondern aufgrund gesetzlicher Vorgaben oder anderer Gründe
						aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen,
						die ihre Aufbewahrung rechtfertigen.
					</p>
					<p>
						<strong>
							Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
							Diensten:
						</strong>
					</p>
					<ul className="m-elements">
						<li>
							<strong>Aufbewahrung und Löschung von Daten: </strong>Die
							folgenden allgemeinen Fristen gelten für die Aufbewahrung und
							Archivierung nach deutschem Recht:
							<ul>
								{" "}
								<li>
									10 Jahre - Aufbewahrungsfrist für Bücher und Aufzeichnungen,
									Jahresabschlüsse, Inventare, Lageberichte, Eröffnungsbilanz
									sowie die zu ihrem Verständnis erforderlichen
									Arbeitsanweisungen und sonstigen Organisationsunterlagen (§
									147 Abs. 1 Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257
									Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB).
								</li>
								<li>
									8 Jahre - Buchungsbelege, wie z. B. Rechnungen und
									Kostenbelege (§ 147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz 1
									AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).
								</li>
								<li>
									6 Jahre - Übrige Geschäftsunterlagen: empfangene Handels- oder
									Geschäftsbriefe, Wiedergaben der abgesandten Handels- oder
									Geschäftsbriefe, sonstige Unterlagen, soweit sie für die
									Besteuerung von Bedeutung sind, z. B. Stundenlohnzettel,
									Betriebsabrechnungsbögen, Kalkulationsunterlagen,
									Preisauszeichnungen, aber auch Lohnabrechnungsunterlagen,
									soweit sie nicht bereits Buchungsbelege sind und
									Kassenstreifen (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, §
									257 Abs. 1 Nr. 2 u. 3 i.V.m. Abs. 4 HGB).
								</li>
								<li>
									3 Jahre - Daten, die erforderlich sind, um potenzielle
									Gewährleistungs- und Schadensersatzansprüche oder ähnliche
									vertragliche Ansprüche und Rechte zu berücksichtigen sowie
									damit verbundene Anfragen zu bearbeiten, basierend auf
									früheren Geschäftserfahrungen und üblichen Branchenpraktiken,
									werden für die Dauer der regulären gesetzlichen
									Verjährungsfrist von drei Jahren gespeichert (§§ 195, 199
									BGB).
								</li>{" "}
							</ul>
						</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m10">
						Rechte der betroffenen Personen
					</h2>
					<p>
						Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als
						Betroffene nach der DSGVO verschiedene Rechte zu, die sich
						insbesondere aus Art. 15 bis 21 DSGVO ergeben:
					</p>
					<ul>
						<li>
							<strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus
							Gründen, die sich aus Ihrer besonderen Situation ergeben,
							jederzeit gegen die Verarbeitung der Sie betreffenden
							personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e
							oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für
							ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie
							betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung
							zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
							Verarbeitung der Sie betreffenden personenbezogenen Daten zum
							Zwecke derartiger Werbung einzulegen; dies gilt auch für das
							Profiling, soweit es mit solcher Direktwerbung in Verbindung
							steht.
						</li>
						<li>
							<strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
							Recht, erteilte Einwilligungen jederzeit zu widerrufen.
						</li>
						<li>
							<strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
							Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet
							werden und auf Auskunft über diese Daten sowie auf weitere
							Informationen und Kopie der Daten entsprechend den gesetzlichen
							Vorgaben.
						</li>
						<li>
							<strong>Recht auf Berichtigung:</strong> Sie haben entsprechend
							den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
							betreffenden Daten oder die Berichtigung der Sie betreffenden
							unrichtigen Daten zu verlangen.
						</li>
						<li>
							<strong>
								Recht auf Löschung und Einschränkung der Verarbeitung:
							</strong>{" "}
							Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
							verlangen, dass Sie betreffende Daten unverzüglich gelöscht
							werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben
							eine Einschränkung der Verarbeitung der Daten zu verlangen.
						</li>
						<li>
							<strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das
							Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben,
							nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
							gängigen und maschinenlesbaren Format zu erhalten oder deren
							Übermittlung an einen anderen Verantwortlichen zu fordern.
						</li>
						<li>
							<strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
							unbeschadet eines anderweitigen verwaltungsrechtlichen oder
							gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
							Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
							gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts
							des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
							Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
							die Vorgaben der DSGVO verstößt.
						</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m225">
						Bereitstellung des Onlineangebots und Webhosting
					</h2>
					<p>
						Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste
						zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die
						IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und
						Funktionen unserer Online-Dienste an den Browser oder das Endgerät
						der Nutzer zu übermitteln.
					</p>
					<ul className="m-elements">
						<li>
							<strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B.
							Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und
							-frequenz, verwendete Gerätetypen und Betriebssysteme,
							Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations-
							und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben,
							Identifikationsnummern, beteiligte Personen); Protokolldaten
							(z. B. Logfiles betreffend Logins oder den Abruf von Daten oder
							Zugriffszeiten.). Inhaltsdaten (z. B. textliche oder bildliche
							Nachrichten und Beiträge sowie die sie betreffenden Informationen,
							wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der
							Erstellung).
						</li>
						<li>
							<strong>Betroffene Personen:</strong> Nutzer (z. B.
							Webseitenbesucher, Nutzer von Onlinediensten).
						</li>
						<li>
							<strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
							Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische
							Infrastruktur (Betrieb und Bereitstellung von Informationssystemen
							und technischen Geräten (Computer, Server etc.).).
							Sicherheitsmaßnahmen.
						</li>
						<li>
							<strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend
							Angaben im Abschnitt "Allgemeine Informationen zur
							Datenspeicherung und Löschung".
						</li>
						<li className="">
							<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
							Abs. 1 S. 1 lit. f) DSGVO).
						</li>
					</ul>
					<p>
						<strong>
							Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
							Diensten:
						</strong>
					</p>
					<ul className="m-elements">
						<li>
							<strong>
								Bereitstellung Onlineangebot auf gemietetem Speicherplatz:{" "}
							</strong>
							Für die Bereitstellung unseres Onlineangebotes nutzen wir
							Speicherplatz, Rechenkapazität und Software, die wir von einem
							entsprechenden Serveranbieter (auch "Webhoster" genannt) mieten
							oder anderweitig beziehen;{" "}
							<span className="">
								<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
								6 Abs. 1 S. 1 lit. f) DSGVO).
							</span>
						</li>
						<li>
							<strong>Erhebung von Zugriffsdaten und Logfiles: </strong>Der
							Zugriff auf unser Onlineangebot wird in Form von sogenannten
							"Server-Logfiles" protokolliert. Zu den Serverlogfiles können die
							Adresse und der Name der abgerufenen Webseiten und Dateien, Datum
							und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über
							erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem
							des Nutzers, Referrer URL (die zuvor besuchte Seite) und im
							Regelfall IP-Adressen und der anfragende Provider gehören. Die
							Serverlogfiles können zum einen zu Sicherheitszwecken eingesetzt
							werden, z. B. um eine Überlastung der Server zu vermeiden
							(insbesondere im Fall von missbräuchlichen Angriffen, sogenannten
							DDoS-Attacken), und zum anderen, um die Auslastung der Server und
							ihre Stabilität sicherzustellen;{" "}
							<span className="">
								<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
								6 Abs. 1 S. 1 lit. f) DSGVO).{" "}
							</span>
							<strong>Löschung von Daten:</strong> Logfile-Informationen werden
							für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht
							oder anonymisiert. Daten, deren weitere Aufbewahrung zu
							Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung
							des jeweiligen Vorfalls von der Löschung ausgenommen.
						</li>
						<li>
							<strong>E-Mail-Versand und -Hosting: </strong>Die von uns in
							Anspruch genommenen Webhosting-Leistungen umfassen ebenfalls den
							Versand, den Empfang sowie die Speicherung von E-Mails. Zu diesen
							Zwecken werden die Adressen der Empfänger sowie Absender als auch
							weitere Informationen betreffend den E-Mailversand (z. B. die
							beteiligten Provider) sowie die Inhalte der jeweiligen E-Mails
							verarbeitet. Die vorgenannten Daten können ferner zu Zwecken der
							Erkennung von SPAM verarbeitet werden. Wir bitten darum, zu
							beachten, dass E-Mails im Internet grundsätzlich nicht
							verschlüsselt versendet werden. Im Regelfall werden E-Mails zwar
							auf dem Transportweg verschlüsselt, aber (sofern kein sogenanntes
							Ende-zu-Ende-Verschlüsselungsverfahren eingesetzt wird) nicht auf
							den Servern, von denen sie abgesendet und empfangen werden. Wir
							können daher für den Übertragungsweg der E-Mails zwischen dem
							Absender und dem Empfang auf unserem Server keine Verantwortung
							übernehmen;{" "}
							<span className="">
								<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
								6 Abs. 1 S. 1 lit. f) DSGVO).
							</span>
						</li>
						<li>
							<strong>VERCEL: </strong>Leistungen auf dem Gebiet der
							Bereitstellung von informationstechnischer Infrastruktur und
							verbundenen Dienstleistungen (z. B. Speicherplatz und/oder
							Rechenkapazitäten); <strong>Dienstanbieter:</strong> Vercel Inc.,
							Avenue Huart Hamoir 71, 1030 Brüssel, Belgien;{" "}
							<span className="">
								<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
								6 Abs. 1 S. 1 lit. f) DSGVO);{" "}
							</span>
							<strong>Website:</strong>{" "}
							<a href="https://www.vercel.com" target="_blank">
								https://www.vercel.com
							</a>
							; <strong>Datenschutzerklärung:</strong>{" "}
							<a href="https://vercel.com/legal/privacy-policy" target="_blank">
								https://vercel.com/legal/privacy-policy
							</a>
							. <strong>Auftragsverarbeitungsvertrag:</strong> Wird vom
							Dienstanbieter bereitgestellt.
						</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m182">
						Kontakt- und Anfrageverwaltung
					</h2>
					<p>
						Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular,
						E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender
						Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden
						Personen verarbeitet, soweit dies zur Beantwortung der
						Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
					</p>
					<ul className="m-elements">
						<li>
							<strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der
							vollständige Name, Wohnadresse, Kontaktinformationen,
							Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen
							oder Telefonnummern). Inhaltsdaten (z. B. textliche oder bildliche
							Nachrichten und Beiträge sowie die sie betreffenden Informationen,
							wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der
							Erstellung).
						</li>
						<li>
							<strong>Betroffene Personen:</strong> Kommunikationspartner.
						</li>
						<li>
							<strong>Zwecke der Verarbeitung:</strong> Kommunikation;
							Organisations- und Verwaltungsverfahren; Feedback (z. B. Sammeln
							von Feedback via Online-Formular). Bereitstellung unseres
							Onlineangebotes und Nutzerfreundlichkeit.
						</li>
						<li>
							<strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend
							Angaben im Abschnitt "Allgemeine Informationen zur
							Datenspeicherung und Löschung".
						</li>
						<li className="">
							<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
							Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche
							Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
						</li>
					</ul>
					<p>
						<strong>
							Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
							Diensten:
						</strong>
					</p>
					<ul className="m-elements">
						<li>
							<strong>HubSpot CRM: </strong>Verwaltung von Kundenkontakten,
							Verfolgung von Verkaufsaktivitäten, Automatisierung von
							Marketingkampagnen, Analyse von Vertriebsdaten, Erstellung und
							Verwaltung von E-Mail-Kampagnen, Integration mit anderen Tools und
							Plattformen, Verwaltung von Kundensupportanfragen, KI-gestützte
							Inhaltsgenerierung, personalisierte E-Mail-Erstellung, prädiktive
							Verkaufsprognosen, automatische Workflow-Beschreibungen und
							KI-Chatbots zur Kundeninteraktion;{" "}
							<strong>Dienstanbieter:</strong> HubSpot Irland Limited, Ground
							Floor, Two Dockland Central Guild Street, Dublin 1, Irland;{" "}
							<span className="">
								<strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
								vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO),
								Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO);{" "}
							</span>
							<strong>Website:</strong>{" "}
							<a href="https://www.hubspot.de/pa/crm" target="_blank">
								https://www.hubspot.de/pa/crm
							</a>
							; <strong>Datenschutzerklärung:</strong>{" "}
							<a
								href="https://legal.hubspot.com/de/privacy-policy"
								target="_blank"
							>
								https://legal.hubspot.com/de/privacy-policy
							</a>
							; <strong>Auftragsverarbeitungsvertrag:</strong>{" "}
							<a href="https://legal.hubspot.com/dpa" target="_blank">
								https://legal.hubspot.com/dpa
							</a>
							. <strong>Grundlage Drittlandtransfers:</strong> Data Privacy
							Framework (DPF).
						</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m17">
						Newsletter und elektronische Benachrichtigungen
					</h2>
					<p>
						Wir versenden Newsletter, E-Mails und weitere elektronische
						Benachrichtigungen (nachfolgend „Newsletter") ausschließlich mit der
						Einwilligung der Empfänger oder aufgrund einer gesetzlichen
						Grundlage. Sofern im Rahmen einer Anmeldung zum Newsletter dessen
						Inhalte genannt werden, sind diese Inhalte für die Einwilligung der
						Nutzer maßgeblich. Für die Anmeldung zu unserem Newsletter ist
						normalerweise die Angabe Ihrer E-Mail-Adresse ausreichend. Um Ihnen
						jedoch einen personalisierten Service bieten zu können, bitten wir
						gegebenenfalls um die Angabe Ihres Namens für eine persönliche
						Ansprache im Newsletter oder um weitere Informationen, falls diese
						für den Zweck des Newsletters notwendig sind.
					</p>
					<p>
						Löschung und Einschränkung der Verarbeitung: Wir können die
						ausgetragenen E-Mail-Adressen bis zu drei Jahren auf Grundlage
						unserer berechtigten Interessen speichern, bevor wir sie löschen, um
						eine ehemals gegebene Einwilligung nachweisen zu können. Die
						Verarbeitung dieser Daten wird auf den Zweck einer potenziellen
						Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag
						ist jederzeit möglich, sofern zugleich das ehemalige Bestehen einer
						Einwilligung bestätigt wird. Im Fall von Pflichten zur dauerhaften
						Beachtung von Widersprüchen behalten wir uns die Speicherung der
						E-Mail-Adresse alleine zu diesem Zweck in einer Sperrliste
						(sogenannte „Blocklist") vor.
					</p>
					<p>
						Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage
						unserer berechtigten Interessen zum Zweck des Nachweises seines
						ordnungsgemäßen Ablaufs. Soweit wir einen Dienstleister mit dem
						Versand von E-Mails beauftragen, erfolgt dies auf Grundlage unserer
						berechtigten Interessen an einem effizienten und sicheren
						Versandsystem.
					</p>
					<strong>Inhalte:</strong>{" "}
					<p>
						Informationen zu uns, unseren Leistungen, Aktionen und Angeboten.
					</p>
					<ul className="m-elements">
						<li>
							<strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der
							vollständige Name, Wohnadresse, Kontaktinformationen,
							Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen
							oder Telefonnummern); Meta-, Kommunikations- und Verfahrensdaten
							(z. B. IP-Adressen, Zeitangaben, Identifikationsnummern,
							beteiligte Personen). Nutzungsdaten (z. B. Seitenaufrufe und
							Verweildauer, Klickpfade, Nutzungsintensität und -frequenz,
							verwendete Gerätetypen und Betriebssysteme, Interaktionen mit
							Inhalten und Funktionen).
						</li>
						<li>
							<strong>Betroffene Personen:</strong> Kommunikationspartner.
						</li>
						<li>
							<strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z. B.
							per E-Mail oder postalisch).
						</li>
						<li className="">
							<strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S.
							1 lit. a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
							f) DSGVO).
						</li>
						<li>
							<strong>Widerspruchsmöglichkeit (Opt-Out): </strong>Sie können den
							Empfang unseres Newsletters jederzeit kündigen, d. .h. Ihre
							Einwilligungen widerrufen, bzw. dem weiteren Empfang
							widersprechen. Einen Link zur Kündigung des Newsletters finden Sie
							entweder am Ende eines jeden Newsletters oder können sonst eine
							der oben angegebenen Kontaktmöglichkeiten, vorzugswürdig E-Mail,
							hierzu nutzen.
						</li>
					</ul>
					<p>
						<strong>
							Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
							Diensten:
						</strong>
					</p>
					<ul className="m-elements">
						<li>
							<strong>Messung von Öffnungs- und Klickraten: </strong>Die
							Newsletter enthalten einen sogenannten „Web Beacons", d. h. eine
							pixelgroße Datei, die beim Öffnen des Newsletters von unserem bzw.
							dessen Server, sofern wir einen Versanddienstleister einsetzen,
							abgerufen wird. Im Rahmen dieses Abrufs werden zunächst sowohl
							technische Informationen, wie beispielsweise Angaben zum Browser
							und Ihrem System, als auch Ihre IP-Adresse und der Zeitpunkt des
							Abrufs erhoben. Diese Informationen werden zur technischen
							Verbesserung unseres Newsletters anhand der technischen Daten oder
							der Zielgruppen und ihres Leseverhaltens auf Basis ihrer Abruforte
							(die mithilfe der IP-Adresse bestimmbar sind) oder der
							Zugriffszeiten genutzt. Diese Analyse beinhaltet ebenfalls die
							Feststellung, ob und wann die Newsletter geöffnet und welche Links
							angeklickt werden. Die Informationen werden den einzelnen
							Newsletterempfängern zugeordnet und in deren Profilen bis zur
							Löschung gespeichert. Die Auswertungen dienen dazu, die
							Lesegewohnheiten unserer Nutzer zu erkennen und unsere Inhalte an
							sie anzupassen oder unterschiedliche Inhalte entsprechend den
							Interessen unserer Nutzer zu versenden. ;{" "}
							<span className="">
								<strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1
								S. 1 lit. a) DSGVO).
							</span>
						</li>
						<li>
							<strong>HubSpot E-Mail-Marketing: </strong>Versand von E-Mails,
							Erstellung personalisierter Kampagnen, Automatisierung von
							Workflows, Segmentierung von Zielgruppen, Integration mit
							CRM-Systemen, Analyse der Leistung durch Berichte und Dashboards;{" "}
							<strong>Dienstanbieter:</strong> HubSpot Irland Limited, Ground
							Floor, Two Dockland Central Guild Street, Dublin 1, Irland;{" "}
							<span className="">
								<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
								6 Abs. 1 S. 1 lit. f) DSGVO);{" "}
							</span>
							<strong>Website:</strong>{" "}
							<a
								href="https://www.hubspot.com/products/marketing/email"
								target="_blank"
							>
								https://www.hubspot.com/products/marketing/email
							</a>
							; <strong>Datenschutzerklärung:</strong>{" "}
							<a
								href="https://legal.hubspot.com/de/privacy-policy"
								target="_blank"
							>
								https://legal.hubspot.com/de/privacy-policy
							</a>
							; <strong>Auftragsverarbeitungsvertrag:</strong>{" "}
							<a href="https://legal.hubspot.com/dpa" target="_blank">
								https://legal.hubspot.com/dpa
							</a>
							. <strong>Grundlage Drittlandtransfers:</strong> Data Privacy
							Framework (DPF).
						</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m638">
						Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon
					</h2>
					<p>
						Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen
						Kommunikation, die über diverse Kanäle, wie z. B. E-Mail, Telefon,
						Post oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann.
					</p>
					<p>
						Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu
						widerrufen oder der werblichen Kommunikation jederzeit zu
						widersprechen.
					</p>
					<p>
						Nach Widerruf oder Widerspruch speichern wir die zum Nachweis der
						bisherigen Berechtigung erforderlichen Daten zur Kontaktaufnahme
						oder Zusendung bis zu drei Jahre nach Ablauf des Jahres des
						Widerrufs oder Widerspruchs auf der Grundlage unserer berechtigten
						Interessen. Die Verarbeitung dieser Daten ist auf den Zweck einer
						möglichen Abwehr von Ansprüchen beschränkt. Auf der Grundlage des
						berechtigten Interesses, den Widerruf bzw. Widerspruch der Nutzer
						dauerhaft zu beachten, speichern wir ferner die zur Vermeidung einer
						erneuten Kontaktaufnahme erforderlichen Daten (z. B. je nach
						Kommunikationskanal die E-Mail-Adresse, Telefonnummer, Name).
					</p>
					<ul className="m-elements">
						<li>
							<strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z. B. der
							vollständige Name, Wohnadresse, Kontaktinformationen,
							Kundennummer, etc.); Kontaktdaten (z. B. Post- und E-Mail-Adressen
							oder Telefonnummern). Inhaltsdaten (z. B. textliche oder bildliche
							Nachrichten und Beiträge sowie die sie betreffenden Informationen,
							wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der
							Erstellung).
						</li>
						<li>
							<strong>Betroffene Personen:</strong> Kommunikationspartner.
						</li>
						<li>
							<strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z. B.
							per E-Mail oder postalisch); Marketing. Absatzförderung.
						</li>
						<li>
							<strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend
							Angaben im Abschnitt "Allgemeine Informationen zur
							Datenspeicherung und Löschung".
						</li>
						<li className="">
							<strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S.
							1 lit. a) DSGVO). Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
							f) DSGVO).
						</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m136">
						Präsenzen in sozialen Netzwerken (Social Media)
					</h2>
					<p>
						Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und
						verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven
						Nutzern zu kommunizieren oder Informationen über uns anzubieten.
					</p>
					<p>
						Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes
						der Europäischen Union verarbeitet werden können. Hierdurch können
						sich für die Nutzer Risiken ergeben, weil so zum Beispiel die
						Durchsetzung der Nutzerrechte erschwert werden könnte.
					</p>
					<p>
						Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im
						Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So
						können beispielsweise anhand des Nutzungsverhaltens und sich daraus
						ergebender Interessen der Nutzer Nutzungsprofile erstellt werden.
						Letztere finden möglicherweise wiederum Verwendung, um etwa
						Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die
						mutmaßlich den Interessen der Nutzer entsprechen. Daher werden im
						Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen
						das Nutzungsverhalten und die Interessen der Nutzer gespeichert
						werden. Zudem können in den Nutzungsprofilen auch Daten unabhängig
						der von den Nutzern verwendeten Geräten gespeichert werden
						(insbesondere, wenn sie Mitglieder der jeweiligen Plattformen und
						dort eingeloggt sind).
					</p>
					<p>
						Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen
						und der Widerspruchsmöglichkeiten (Opt-out) verweisen wir auf die
						Datenschutzerklärungen und Angaben der Betreiber der jeweiligen
						Netzwerke.
					</p>
					<p>
						Auch im Fall von Auskunftsanfragen und der Geltendmachung von
						Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten
						bei den Anbietern geltend gemacht werden können. Nur Letztere haben
						jeweils Zugriff auf die Nutzerdaten und können direkt entsprechende
						Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe
						benötigen, dann können Sie sich an uns wenden.
					</p>
					<ul className="m-elements">
						<li>
							<strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B.
							Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z.
							B. textliche oder bildliche Nachrichten und Beiträge sowie die sie
							betreffenden Informationen, wie z. B. Angaben zur Autorenschaft
							oder Zeitpunkt der Erstellung). Nutzungsdaten (z. B. Seitenaufrufe
							und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz,
							verwendete Gerätetypen und Betriebssysteme, Interaktionen mit
							Inhalten und Funktionen).
						</li>
						<li>
							<strong>Betroffene Personen:</strong> Nutzer (z. B.
							Webseitenbesucher, Nutzer von Onlinediensten).
						</li>
						<li>
							<strong>Zwecke der Verarbeitung:</strong> Kommunikation; Feedback
							(z. B. Sammeln von Feedback via Online-Formular).
							Öffentlichkeitsarbeit.
						</li>
						<li>
							<strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend
							Angaben im Abschnitt "Allgemeine Informationen zur
							Datenspeicherung und Löschung".
						</li>
						<li className="">
							<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
							Abs. 1 S. 1 lit. f) DSGVO).
						</li>
					</ul>
					<p>
						<strong>
							Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
							Diensten:
						</strong>
					</p>
					<ul className="m-elements">
						<li>
							<strong>LinkedIn: </strong>Soziales Netzwerk - Wir sind gemeinsam
							mit LinkedIn Irland Unlimited Company für die Erhebung (jedoch
							nicht die weitere Verarbeitung) von Daten der Besucher
							verantwortlich, die zur Erstellung der „Page-Insights"
							(Statistiken) unserer LinkedIn-Profile genutzt werden. Zu diesen
							Daten gehören Informationen über die Arten von Inhalten, die
							Nutzer sich ansehen oder mit denen sie interagieren, sowie die von
							ihnen vorgenommenen Handlungen. Außerdem werden Details über die
							genutzten Geräte erfasst, wie z. B. IP-Adressen, Betriebssystem,
							Browsertyp, Spracheinstellungen und Cookie-Daten, sowie Angaben
							aus den Nutzerprofilen, wie Berufsfunktion, Land, Branche,
							Hierarchieebene, Unternehmensgröße und Beschäftigungsstatus.
							Datenschutzinformationen zur Verarbeitung von Nutzerdaten durch
							LinkedIn können den Datenschutzhinweisen von LinkedIn entnommen
							werden:{" "}
							<a
								href="https://www.linkedin.com/legal/privacy-policy"
								target="_blank"
							>
								https://www.linkedin.com/legal/privacy-policy.
							</a>
							<br />
							Wir haben mit LinkedIn Irland eine spezielle Vereinbarung
							geschlossen („Page Insights Joint Controller Addendum",{" "}
							<a
								href="https://legal.linkedin.com/pages-joint-controller-addendum"
								target="_blank"
							>
								https://legal.linkedin.com/pages-joint-controller-addendum
							</a>
							), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen
							LinkedIn beachten muss und in der LinkedIn sich bereit erklärt
							hat, die Rechte der Betroffenen zu erfüllen (d. h. Nutzer können
							z. B. Auskunfts- oder Löschungsanfragen direkt an LinkedIn
							richten). Die Rechte der Nutzer (insbesondere das Recht auf
							Auskunft, Löschung, Widerspruch und Beschwerde bei der zuständigen
							Aufsichtsbehörde) werden durch die Vereinbarungen mit LinkedIn
							nicht eingeschränkt. Die gemeinsame Verantwortlichkeit beschränkt
							sich auf die Erhebung und Übermittlung der Daten an LinkedIn
							Irland Unlimited Company, ein Unternehmen mit Sitz in der EU. Die
							weitere Verarbeitung der Daten obliegt ausschließlich LinkedIn
							Irland Unlimited Company, insbesondere was die Übermittlung der
							Daten an die Muttergesellschaft LinkedIn Corporation in den USA
							betrifft; <strong>Dienstanbieter:</strong> LinkedIn Ireland
							Unlimited Company, Wilton Place, Dublin 2, Irland;{" "}
							<span className="">
								<strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
								6 Abs. 1 S. 1 lit. f) DSGVO);{" "}
							</span>
							<strong>Website:</strong>{" "}
							<a href="https://www.linkedin.com" target="_blank">
								https://www.linkedin.com
							</a>
							; <strong>Datenschutzerklärung:</strong>{" "}
							<a
								href="https://www.linkedin.com/legal/privacy-policy"
								target="_blank"
							>
								https://www.linkedin.com/legal/privacy-policy
							</a>
							; <strong>Grundlage Drittlandtransfers:</strong> Data Privacy
							Framework (DPF).{" "}
							<strong>Widerspruchsmöglichkeit (Opt-Out):</strong>{" "}
							<a
								href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
								target="_blank"
							>
								https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
							</a>
							.
						</li>
					</ul>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m15">
						Änderung und Aktualisierung
					</h2>
					<p>
						Wir bitten Sie, sich regelmäßig über den Inhalt unserer
						Datenschutzerklärung zu informieren. Wir passen die
						Datenschutzerklärung an, sobald die Änderungen der von uns
						durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
						informieren Sie, sobald durch die Änderungen eine
						Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine
						sonstige individuelle Benachrichtigung erforderlich wird.
					</p>
					<p>
						Sofern wir in dieser Datenschutzerklärung Adressen und
						Kontaktinformationen von Unternehmen und Organisationen angeben,
						bitten wir zu beachten, dass die Adressen sich über die Zeit ändern
						können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
					</p>
					<h2 className="text-xl font-bold mb-8 text-orange-500" id="m42">
						Begriffsdefinitionen
					</h2>
					<p>
						In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
						Datenschutzerklärung verwendeten Begrifflichkeiten. Soweit die
						Begrifflichkeiten gesetzlich definiert sind, gelten deren
						gesetzliche Definitionen. Die nachfolgenden Erläuterungen sollen
						dagegen vor allem dem Verständnis dienen.
					</p>
					<ul className="glossary">
						<li>
							<strong>Bestandsdaten:</strong> Bestandsdaten umfassen wesentliche
							Informationen, die für die Identifikation und Verwaltung von
							Vertragspartnern, Benutzerkonten, Profilen und ähnlichen
							Zuordnungen notwendig sind. Diese Daten können u.a. persönliche
							und demografische Angaben wie Namen, Kontaktinformationen
							(Adressen, Telefonnummern, E-Mail-Adressen), Geburtsdaten und
							spezifische Identifikatoren (Benutzer-IDs) beinhalten.
							Bestandsdaten bilden die Grundlage für jegliche formelle
							Interaktion zwischen Personen und Diensten, Einrichtungen oder
							Systemen, indem sie eine eindeutige Zuordnung und Kommunikation
							ermöglichen.{" "}
						</li>
						<li>
							<strong>Inhaltsdaten:</strong> Inhaltsdaten umfassen
							Informationen, die im Zuge der Erstellung, Bearbeitung und
							Veröffentlichung von Inhalten aller Art generiert werden. Diese
							Kategorie von Daten kann Texte, Bilder, Videos, Audiodateien und
							andere multimediale Inhalte einschließen, die auf verschiedenen
							Plattformen und Medien veröffentlicht werden. Inhaltsdaten sind
							nicht nur auf den eigentlichen Inhalt beschränkt, sondern
							beinhalten auch Metadaten, die Informationen über den Inhalt
							selbst liefern, wie Tags, Beschreibungen, Autoreninformationen und
							Veröffentlichungsdaten{" "}
						</li>
						<li>
							<strong>Kontaktdaten:</strong> Kontaktdaten sind essentielle
							Informationen, die die Kommunikation mit Personen oder
							Organisationen ermöglichen. Sie umfassen u.a. Telefonnummern,
							postalische Adressen und E-Mail-Adressen, sowie
							Kommunikationsmittel wie soziale Medien-Handles und
							Instant-Messaging-Identifikatoren.{" "}
						</li>
						<li>
							<strong>Meta-, Kommunikations- und Verfahrensdaten:</strong>{" "}
							Meta-, Kommunikations- und Verfahrensdaten sind Kategorien, die
							Informationen über die Art und Weise enthalten, wie Daten
							verarbeitet, übermittelt und verwaltet werden. Meta-Daten, auch
							bekannt als Daten über Daten, umfassen Informationen, die den
							Kontext, die Herkunft und die Struktur anderer Daten beschreiben.
							Sie können Angaben zur Dateigröße, dem Erstellungsdatum, dem Autor
							eines Dokuments und den Änderungshistorien beinhalten.
							Kommunikationsdaten erfassen den Austausch von Informationen
							zwischen Nutzern über verschiedene Kanäle, wie E-Mail-Verkehr,
							Anrufprotokolle, Nachrichten in sozialen Netzwerken und
							Chat-Verläufe, inklusive der beteiligten Personen, Zeitstempel und
							Übertragungswege. Verfahrensdaten beschreiben die Prozesse und
							Abläufe innerhalb von Systemen oder Organisationen, einschließlich
							Workflow-Dokumentationen, Protokolle von Transaktionen und
							Aktivitäten, sowie Audit-Logs, die zur Nachverfolgung und
							Überprüfung von Vorgängen verwendet werden.{" "}
						</li>
						<li>
							<strong>Nutzungsdaten:</strong> Nutzungsdaten beziehen sich auf
							Informationen, die erfassen, wie Nutzer mit digitalen Produkten,
							Dienstleistungen oder Plattformen interagieren. Diese Daten
							umfassen eine breite Palette von Informationen, die aufzeigen, wie
							Nutzer Anwendungen nutzen, welche Funktionen sie bevorzugen, wie
							lange sie auf bestimmten Seiten verweilen und über welche Pfade
							sie durch eine Anwendung navigieren. Nutzungsdaten können auch die
							Häufigkeit der Nutzung, Zeitstempel von Aktivitäten, IP-Adressen,
							Geräteinformationen und Standortdaten einschließen. Sie sind
							besonders wertvoll für die Analyse des Nutzerverhaltens, die
							Optimierung von Benutzererfahrungen, das Personalisieren von
							Inhalten und das Verbessern von Produkten oder Dienstleistungen.
							Darüber hinaus spielen Nutzungsdaten eine entscheidende Rolle beim
							Erkennen von Trends, Vorlieben und möglichen Problembereichen
							innerhalb digitaler Angebote{" "}
						</li>
						<li>
							<strong>Personenbezogene Daten:</strong> "Personenbezogene Daten"
							sind alle Informationen, die sich auf eine identifizierte oder
							identifizierbare natürliche Person (im Folgenden "betroffene
							Person") beziehen; als identifizierbar wird eine natürliche Person
							angesehen, die direkt oder indirekt, insbesondere mittels
							Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer,
							zu Standortdaten, zu einer Online-Kennung (z. B. Cookie) oder zu
							einem oder mehreren besonderen Merkmalen identifiziert werden
							kann, die Ausdruck der physischen, physiologischen, genetischen,
							psychischen, wirtschaftlichen, kulturellen oder sozialen Identität
							dieser natürlichen Person sind.{" "}
						</li>
						<li>
							<strong>Protokolldaten:</strong> Protokolldaten sind Informationen
							über Ereignisse oder Aktivitäten, die in einem System oder
							Netzwerk protokolliert wurden. Diese Daten enthalten
							typischerweise Informationen wie Zeitstempel, IP-Adressen,
							Benutzeraktionen, Fehlermeldungen und andere Details über die
							Nutzung oder den Betrieb eines Systems. Protokolldaten werden oft
							zur Analyse von Systemproblemen, zur Sicherheitsüberwachung oder
							zur Erstellung von Leistungsberichten verwendet.{" "}
						</li>
						<li>
							<strong>Verantwortlicher:</strong> Als "Verantwortlicher" wird die
							natürliche oder juristische Person, Behörde, Einrichtung oder
							andere Stelle, die allein oder gemeinsam mit anderen über die
							Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
							entscheidet, bezeichnet.{" "}
						</li>
						<li>
							<strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder
							ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede
							solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten.
							Der Begriff reicht weit und umfasst praktisch jeden Umgang mit
							Daten, sei es das Erheben, das Auswerten, das Speichern, das
							Übermitteln oder das Löschen.{" "}
						</li>
					</ul>
					<p className="seal">
						<a
							href="https://datenschutz-generator.de/"
							title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
							target="_blank"
							rel="noopener noreferrer nofollow"
						>
							Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
							Schwenke
						</a>
					</p>
				</div>
				<Footer language={language} />
			</main>
		</div>
	);
}
