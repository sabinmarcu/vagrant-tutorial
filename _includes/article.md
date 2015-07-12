

## Instalare

### Ubuntu

### Mac OS X

Primul pas spre a instala Vagrant pe o mașină OS X este a descărca imaginea de instalare _.dmg_ (ultima versiune disponibilă la data creări articolului este **vagrant_v1.7.3.dmg**). Aceasta imagine este disponibilă la [adresa de descărcare a site-ului](http://www.vagrantup.com/downloads.html) Vagrant, ilustrată in imaginea de mai jos:
[![Imagine pagină de descărcare](assets/images/images/macos/download.png)](assets/images/images/macos/download.png)

După ce imaginea este descărcată, dacă nu se montează automat, faceți `dublu-click` pe fișier pentru a îl monta. După ce imaginea este montată, se va deschide o fereastră _Finder_ cu conținutul, ce va arătă asemănător cu imaginea de mai jos:
[![Imagine conținut imagine](assets/images/images/macos/image.png)](assets/images/images/macos/image.png)

În acest moment, va trebui executat fișierul `Vagrant.pkg` pentru a iniția instalarea. Instalarea urmează un fir standard de execuție, necesitând apăsarea butonului de continuare de două ori, oferind opțiunea de a schimba locația instalării. La sfârșitul acestui proces, utilizatorul va fi solicitat să introducă parola sa pentru a putea efectua instalarea. Procesul este ilustrat în imaginile de mai jos:

[![Imagine prim pas al instalării](assets/images/images/macos/firststep.png)](assets/images/images/macos/firststep.png)
[![Imagine alegere a locației instalării](assets/images/images/macos/installlocation.png)](assets/images/images/macos/installlocation.png)
[![Imagine solicitare a parolei](assets/images/images/macos/pass.png)](assets/images/images/macos/pass.png)

Instalarea va continua până la sfârșit, prezentând următoarea fereastră:

[![Imagine terminare instalare](assets/images/images/macos/installcomplete.png)](assets/images/images/macos/installcomplete.png)

În acest moment este recomandată demontarea imaginii, din moment ce instalarea este finalizată. Demontarea se realizează prin apăsarea butonului indicat în imaginea de mai jos.

[![Imagine demontare imagine](assets/images/images/macos/unmount.png)](assets/images/images/macos/unmount.png)

Din acest moment, utilizarea programului command line `vagrant` va fi posibil folosind aplicația `Terminal.app` (sau `iTerm2.app` sau orice alt emulator terminal preferat). Exemplu de funcționalitate este prezentat mai jos:

[![Imagine execuție vagrant help](assets/images/images/macos/vagranthelp.png)](assets/images/images/macos/vagranthelp.png)

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
- După restart, puteți verifica în cmd dacă s-a instalat, folosind comanda ```vagrant```

[![Imagine vagrant cmd](assets/images/images/windows/vagrant_cmd.png)](assets/images/images/windows/vagrant_cmd.png)


## Basic Use

**Initializare**

Deși atunci când ați rulat ```vagrant``` în cmd a apărut o listă de comenzi, pentru a seta un server propriu cu ajutorul Vagrant este nevoie doar de câteva dintre ele. Comanda ```vagrant init``` va crea in director un fisier Vagrantfile, ce conține detalii legate de configurare. Este un exercițiu bun să îl deschideți și să parcurgeți conținutul.

[![Imagine vagrant init](assets/images/images/windows/vagrant_init.png)](assets/images/images/windows/vagrant_init.png)

**Cum să vă creați propriul server?**

Pentru început, creați un folder în care va fi proiectul și serverul, apoi deschideți un Command Prompt în acest director, unde rulați comanda: 

```vagrant init ubuntu/trusty64```

Aceasta va crea fisierul Vagrantfile, descris mai sus. Vagrant pune la dispoziția noastră anumite box-uri (detalii în capitolul următor), iar pentru acest exemplu vom folosi ```ubuntu/trusty64``` care va configura un server cu Ubuntu. Următoarea comandă ce trebuie rulată este:

```vagrant up```

La prima rulare a acestei comenzi se crează o mașină virtuală conform configurătilor din fișierul Vagrantfile creat la inițializare. Pentru a verifica la final că mașina este într-adevăr up and running, deschideți VirtualBox și ar trebui să apară ceva asemănător ca în imagine:

[![Imagine vagrant VirtualBox](assets/images/images/windows/vagrant_vb.png)](assets/images/images/windows/vagrant_vb.png)

De asemenea, de fiecare dată când doriți doar să deschideți mașina, se execută comanda ```vagrant up```.

Ultima comandă ce trebuie executată este:

```vagrant ssh```

Aceasta va deschide un shell în Unbuntu, adică în mașina ce tocmai am instalat-o.

**Alte comenzi utile**

- ```vagrant halt``` , pentru a opri mașina
- ```vagrant restart```, pentru a restarta
- ```vagrant distroy```, pentru a șterge mașina și toate configurările acesteia
