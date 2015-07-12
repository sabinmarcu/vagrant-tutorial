

## Instalare

Înainte de a începe instalarea **Vagrant** trebuie să ne asigurăm că Vagrant va avea un sistem de mașini virtuale pe care îl va putea folosi. Vagrant suportă un numar de astfel de sisteme printre care și: *VirtualBox*, *VMWare*, *Docker*, *Hyper-V*, etc. Conexiunea pentru aceste sisteme se realizează prin plugin-uri numite *Provideri*. Vagrant vine pre-instalat cu suport pentru *VirtualBox*, iar suportul pentru alte platforme (platforme care de obicei necesită licență plătită) este de obicei oferit contra-cost.

Prin urmare, vom folosi **VirtualBox** pentru a lucra cu Vagrant, iar înainte de a instala / folosi Vagrant, trebuie să ne asigurăm că *VirtualBox* este instalat. Pentru a instala VirtualBox, va trebui să accesați [pagina de descărcare](https://www.virtualbox.org/wiki/Downloads) și să descărcați și instalați versiunea potrivită sistemului de operare folosit.

{% comment %}

Link catre un tutorial VirtualBox

{% endcomment %}

### Linux (Ubuntu)

Pentru scopul acestui tutorial se va folosi o instalare de **Ubuntu** deoarece este cea mai populară / folosită distribuție de *linux* la momentul actual. Procedeul de instalare pentru alte distribuții este similar.

Primul pas spre a instala Vagrant pe o mașină Ubuntu / Linux este a descărca pachetul de instalare _.deb_ (ultima versiune disponibilă la data creări articolului este **vagrant_1.7.3**). Pachetul va trebui ales și în funcție de arhitectura sistemului de operare, fie *32 de biți*, fie *64 de biți*. Dacă nu sunteți siguri, folosiți varianta pe *32 de biți*. Aceasta imagine este disponibilă la [adresa de descărcare a site-ului](http://www.vagrantup.com/downloads.html) Vagrant, ilustrată in imaginea de mai jos:
[![Imagine pagină de descărcare](assets/images/images/ubuntu/website.png)](assets/images/images/ubuntu/website.png)

După ce pachetul este descărcat, rulați fișierul fie din meniul / fereastra de download a browser-ului, fie din *File Explorer* (Nautilus în cazul Ubuntu). La deschiderea fișierului o fereastră asemănătoare cu cea de mai jos se va deschide, pentru a iniția procesul de instalare. Utilizatorul va trebui să urmărească un fir standard de execuție, prin a apăsa butonul de instalare. La un moment dat, utilizatorul va fi solicitat să introducă parola sa pentru a putea efectua instalarea.Procesul este ilustrat în imaginile de mai jos:

[![Imagine fereastră de instalare](assets/images/images/ubuntu/installwindow.png)](assets/images/images/ubuntu/installwindow.png)
[![Imagine fereastră de autentificare](assets/images/images/ubuntu/pass.png)](assets/images/images/ubuntu/pass.png)

La sfârșitul instalării, fereastra inițială va afișa faptul că pachetul este instalat, într-o manieră similara ca cea prezentată mai jos:

[![Imagine fereastră de instalare finalizata](assets/images/images/ubuntu/finishedinstall.png)](assets/images/images/ubuntu/finishedinstall.png)

într-un final, utilizatorul poate verifica dacă Vagrant a fost instalat pentru a deschide un emulator de terminal (Ubuntu: aplicația Terminal. Nota: Aplicația terminal poate fi pornit într-un instalare tipică de Ubuntu prin combinația de taste **`Control` + `Alt` + `T`**) și introducerea comenzii :

```bash
$ vagrant --help
```

sau

```bash
$ vagrant --version
```

Exemplu:

[![Imagine ajutor vagrant](assets/images/images/ubuntu/vagranthelp.png)](assets/images/images/ubuntu/vagranthelp.png)



### Mac OS X

Primul pas spre a instala Vagrant pe o mașină OS X este a descărca imaginea de instalare _.dmg_ (ultima versiune disponibilă la data creări articolului este **vagrant_v1.7.3.dmg**). Aceasta imagine este disponibilă la [adresa de descărcare a site-ului](http://www.vagrantup.com/downloads.html) Vagrant, ilustrată in imaginea de mai jos:
[<img alt='Imagine pagină de descărcare' src='assets/images/images/macos/download.png' class="noshadow" />](assets/images/images/macos/download.png)

După ce imaginea este descărcată, dacă nu se montează automat, faceți `dublu-click` pe fișier pentru a îl monta. După ce imaginea este montată, se va deschide o fereastră _Finder_ cu conținutul, ce va arătă asemănător cu imaginea de mai jos:
[<img alt='Imagine conținut imagine' src='assets/images/images/macos/image.png' class="noshadow" />(assets/images/images/macos/image.png)

În acest moment, va trebui executat fișierul `Vagrant.pkg` pentru a iniția instalarea. Instalarea urmează un fir standard de execuție, necesitând apăsarea butonului de continuare de două ori, oferind opțiunea de a schimba locația instalării. La sfârșitul acestui proces, utilizatorul va fi solicitat să introducă parola sa pentru a putea efectua instalarea. Procesul este ilustrat în imaginile de mai jos:

[<img alt='Imagine prim pas al instalării' src='assets/images/images/macos/firststep.png' class="noshadow" />](assets/images/images/macos/firststep.png)
[<img alt='Imagine alegere a locației instalării' src='assets/images/images/macos/installlocation.png' class="noshadow" />](assets/images/images/macos/installlocation.png)
[<img alt='Imagine solicitare a parolei' src='assets/images/images/macos/pass.png' class="noshadow" />](assets/images/images/macos/pass.png)

Instalarea va continua până la sfârșit, prezentând următoarea fereastră:

[<img alt='Imagine terminare instalare' src='assets/images/images/macos/installcomplete.png' class="noshadow" />](assets/images/images/macos/installcomplete.png)

În acest moment este recomandată demontarea imaginii, din moment ce instalarea este finalizată. Demontarea se realizează prin apăsarea butonului indicat în imaginea de mai jos.

[<img alt='Imagine demontare imagine' src='assets/images/images/macos/unmount.png' class="noshadow" />](assets/images/images/macos/unmount.png)

Din acest moment, utilizarea programului command line `vagrant` va fi posibil folosind aplicația `Terminal.app` (sau `iTerm2.app` sau orice alt emulator terminal preferat). Exemplu de funcționalitate este prezentat mai jos:

[<img alt='Imagine execuție vagrant help' src='assets/images/images/macos/vagranthelp.png' class="noshadow" />](assets/images/images/macos/vagranthelp.png)

### Windows

**Pas 1**

- Instalați VirtualBox, versiunea pentru Windows! Se poate descărca de aici: [adresa de descărcare](https://www.virtualbox.org/wiki/Downloads)



**Pas 2**

- Vagrant are nevoie de un client SSH, iar Windows 7/8 nu îl contine by default, așa că vom folosi Git.
- Instalați Git pentru Windows: [adresa de descărcare](http://msysgit.github.io/)
- Deschideți, în ordine, _Control Panel_ > _System_ > _Advanced system settings_ > _Environment Variables..._, ca în imaginile ce urmează:

[![Imagine control panel](assets/images/images/windows/control_panel.png)](assets/images/images/windows/control_panel.png)

[![Imagine system](assets/images/images/windows/system.png)](assets/images/images/windows/system.png)

[![Imagine system properties](assets/images/images/windows/system_properties.png)](assets/images/images/windows/system_properties.png)

- În cele ce urmează, setați PATH-ul urmând pașii din imagini. Selectați _Path_ din _System variables_, apoi click _Edit..._:

[![Imagine path](assets/images/images/windows/path.png)](assets/images/images/windows/path.png)

- În _Variable value_, adaugați la final calea către folderul /bin unde ați instalat git. De obicei, aceasta este C:\Program Files (x86)\Git\bin

[![Imagine edit path](assets/images/images/windows/edit_path.png)](assets/images/images/windows/edit_path.png)

**Pas 3**

- Instalați Vagrant, versiunea de Windows: [adresa de descărcare a site-ului](http://www.vagrantup.com/downloads.html)
- După instalare, windows-ul va cere un restart pentru a-și crea configurările
- După restart, puteți verifica în cmd dacă s-a instalat, folosind comanda ```vagrant
```

[![Imagine vagrant cmd](assets/images/images/windows/vagrant_cmd.png)](assets/images/images/windows/vagrant_cmd.png)


## Basic Use

**Initializare**

Deși atunci când ați rulat ```vagrant``` în cmd a apărut o listă de comenzi, pentru a seta un server propriu cu ajutorul Vagrant este nevoie doar de câteva dintre ele. Comanda ```vagrant init``` va crea in director un fisier Vagrantfile, ce conține detalii legate de configurare. Este un exercițiu bun să îl deschideți și să parcurgeți conținutul.

[![Imagine vagrant init](assets/images/images/windows/vagrant_init.png)](assets/images/images/windows/vagrant_init.png)

**Cum să vă creați propriul server?**

Pentru început, creați un folder în care va fi proiectul și serverul, apoi deschideți un Command Prompt în acest director, unde rulați comanda:

```bash
$ vagrant init ubuntu/trusty64
```

Aceasta va crea fisierul Vagrantfile, descris mai sus. Vagrant pune la dispoziția noastră anumite box-uri (detalii în capitolul următor), iar pentru acest exemplu vom folosi ```ubuntu/trusty64``` care va configura un server cu Ubuntu. Următoarea comandă ce trebuie rulată este:

```bash
$ vagrant up
```

La prima rulare a acestei comenzi se crează o mașină virtuală conform configurătilor din fișierul Vagrantfile creat la inițializare. Pentru a verifica la final că mașina este într-adevăr up and running, deschideți VirtualBox și ar trebui să apară ceva asemănător ca în imagine:

[![Imagine vagrant VirtualBox](assets/images/images/windows/vagrant_vb.png)](assets/images/images/windows/vagrant_vb.png)

De asemenea, de fiecare dată când doriți doar să deschideți mașina, se execută comanda ```vagrant up```.

Ultima comandă ce trebuie executată este:

```bash
$ vagrant ssh
```

Aceasta va deschide un shell în Unbuntu, adică în mașina ce tocmai am instalat-o.

**Alte comenzi utile**

- `vagrant halt` , pentru a opri mașina
- `vagrant restart`, pentru a restarta
- `vagrant distroy`, pentru a șterge mașina și toate configurările acesteia

## Port Forwarding

După cum am arătat mai sus, în configurarea unei mașini Vagrant, există opțiunea de a face `port forwarding`.
