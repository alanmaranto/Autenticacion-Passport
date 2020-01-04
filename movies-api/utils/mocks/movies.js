const moviesMock = [
  {
    id: 1,
    title: 'Sander',
    year: 'Kasting',
    cover: 'http://dummyimage.com/189x112.jpg/dddddd/000000',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 93,
    contentRating: 'G',
    source:
      'http://sohu.com/morbi/non.aspx?integer=diam&aliquet=cras&massa=pellentesque&id=volutpat&lobortis=dui&convallis=maecenas&tortor=tristique&risus=est&dapibus=et&augue=tempus&vel=semper&accumsan=est&tellus=quam&nisi=pharetra&eu=magna&orci=ac&mauris=consequat&lacinia=metus&sapien=sapien&quis=ut&libero=nunc&nullam=vestibulum&sit=ante&amet=ipsum&turpis=primis&elementum=in&ligula=faucibus&vehicula=orci&consequat=luctus&morbi=et&a=ultrices&ipsum=posuere&integer=cubilia&a=curae&nibh=mauris&in=viverra&quis=diam&justo=vitae&maecenas=quam&rhoncus=suspendisse&aliquam=potenti&lacus=nullam&morbi=porttitor&quis=lacus&tortor=at&id=turpis&nulla=donec&ultrices=posuere&aliquet=metus&maecenas=vitae&leo=ipsum&odio=aliquam&condimentum=non&id=mauris',
    tags: ['Comedy|Horror']
  },
  {
    id: 2,
    title: 'Michel',
    year: 'Dooly',
    cover: 'http://dummyimage.com/163x216.jpg/5fa2dd/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 96,
    contentRating: 'R',
    source:
      'https://goodreads.com/posuere/cubilia/curae/duis.jsp?luctus=nullam&et=molestie&ultrices=nibh&posuere=in&cubilia=lectus&curae=pellentesque&donec=at&pharetra=nulla&magna=suspendisse&vestibulum=potenti&aliquet=cras&ultrices=in&erat=purus&tortor=eu&sollicitudin=magna&mi=vulputate&sit=luctus&amet=cum&lobortis=sociis&sapien=natoque&sapien=penatibus&non=et&mi=magnis&integer=dis&ac=parturient&neque=montes&duis=nascetur&bibendum=ridiculus&morbi=mus&non=vivamus&quam=vestibulum&nec=sagittis&dui=sapien&luctus=cum&rutrum=sociis&nulla=natoque&tellus=penatibus&in=et&sagittis=magnis&dui=dis&vel=parturient&nisl=montes&duis=nascetur&ac=ridiculus&nibh=mus&fusce=etiam&lacus=vel&purus=augue&aliquet=vestibulum&at=rutrum&feugiat=rutrum&non=neque&pretium=aenean&quis=auctor&lectus=gravida&suspendisse=sem&potenti=praesent&in=id&eleifend=massa&quam=id&a=nisl&odio=venenatis&in=lacinia&hac=aenean&habitasse=sit&platea=amet&dictumst=justo&maecenas=morbi&ut=ut&massa=odio&quis=cras&augue=mi&luctus=pede&tincidunt=malesuada&nulla=in&mollis=imperdiet&molestie=et&lorem=commodo&quisque=vulputate',
    tags: ['Drama', 'Drama']
  },
  {
    id: 3,
    title: 'Emera',
    year: 'Mullane',
    cover: 'http://dummyimage.com/157x165.bmp/5fa2dd/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 83,
    contentRating: 'G',
    source:
      'http://engadget.com/nulla/ac/enim.js?interdum=nunc&in=proin&ante=at&vestibulum=turpis&ante=a&ipsum=pede&primis=posuere&in=nonummy&faucibus=integer&orci=non&luctus=velit&et=donec&ultrices=diam&posuere=neque&cubilia=vestibulum&curae=eget&duis=vulputate&faucibus=ut&accumsan=ultrices&odio=vel&curabitur=augue&convallis=vestibulum&duis=ante&consequat=ipsum',
    tags: ['Crime|Drama']
  },
  {
    id: 4,
    title: 'Gabbi',
    year: 'Fraanchyonok',
    cover: 'http://dummyimage.com/120x207.bmp/cc0000/ffffff',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 114,
    contentRating: 'G',
    source:
      'http://github.com/vestibulum/aliquet/ultrices/erat.html?tortor=fusce&risus=consequat&dapibus=nulla&augue=nisl&vel=nunc&accumsan=nisl&tellus=duis&nisi=bibendum&eu=felis&orci=sed&mauris=interdum&lacinia=venenatis&sapien=turpis&quis=enim&libero=blandit',
    tags: ['Action|Drama|War', 'Action|Thriller']
  },
  {
    id: 5,
    title: 'Alissa',
    year: 'Blainey',
    cover: 'http://dummyimage.com/116x198.png/cc0000/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    duration: 111,
    contentRating: 'G',
    source:
      'http://sakura.ne.jp/nulla/tellus/in/sagittis.js?tortor=integer&duis=ac&mattis=neque&egestas=duis&metus=bibendum&aenean=morbi&fermentum=non&donec=quam&ut=nec&mauris=dui&eget=luctus&massa=rutrum&tempor=nulla&convallis=tellus&nulla=in&neque=sagittis&libero=dui&convallis=vel&eget=nisl&eleifend=duis&luctus=ac&ultricies=nibh&eu=fusce&nibh=lacus&quisque=purus&id=aliquet&justo=at&sit=feugiat&amet=non&sapien=pretium&dignissim=quis&vestibulum=lectus&vestibulum=suspendisse&ante=potenti&ipsum=in&primis=eleifend&in=quam&faucibus=a&orci=odio&luctus=in&et=hac&ultrices=habitasse&posuere=platea&cubilia=dictumst&curae=maecenas&nulla=ut&dapibus=massa&dolor=quis&vel=augue&est=luctus&donec=tincidunt&odio=nulla&justo=mollis&sollicitudin=molestie&ut=lorem&suscipit=quisque&a=ut&feugiat=erat&et=curabitur&eros=gravida&vestibulum=nisi&ac=at&est=nibh&lacinia=in&nisi=hac&venenatis=habitasse&tristique=platea&fusce=dictumst&congue=aliquam&diam=augue&id=quam&ornare=sollicitudin&imperdiet=vitae&sapien=consectetuer&urna=eget&pretium=rutrum&nisl=at&ut=lorem&volutpat=integer&sapien=tincidunt&arcu=ante&sed=vel&augue=ipsum&aliquam=praesent&erat=blandit&volutpat=lacinia&in=erat&congue=vestibulum&etiam=sed&justo=magna&etiam=at&pretium=nunc&iaculis=commodo&justo=placerat&in=praesent&hac=blandit&habitasse=nam',
    tags: [
      'Crime|Drama|Film-Noir|Thriller',
      'Drama',
      'Crime|Drama|Thriller',
      'Action|Animation|Children|Comedy|Musical'
    ]
  },
  {
    id: 6,
    title: 'Sandro',
    year: 'Lorait',
    cover: 'http://dummyimage.com/223x111.jpg/5fa2dd/ffffff',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 81,
    contentRating: 'PG-13',
    source:
      'http://yale.edu/aliquam/non/mauris/morbi/non.js?velit=pede&id=malesuada&pretium=in&iaculis=imperdiet&diam=et&erat=commodo&fermentum=vulputate&justo=justo&nec=in&condimentum=blandit&neque=ultrices&sapien=enim&placerat=lorem&ante=ipsum&nulla=dolor&justo=sit&aliquam=amet&quis=consectetuer&turpis=adipiscing&eget=elit&elit=proin&sodales=interdum&scelerisque=mauris&mauris=non&sit=ligula&amet=pellentesque&eros=ultrices&suspendisse=phasellus&accumsan=id&tortor=sapien&quis=in&turpis=sapien&sed=iaculis&ante=congue&vivamus=vivamus&tortor=metus&duis=arcu&mattis=adipiscing&egestas=molestie&metus=hendrerit&aenean=at&fermentum=vulputate&donec=vitae&ut=nisl&mauris=aenean&eget=lectus&massa=pellentesque&tempor=eget&convallis=nunc&nulla=donec&neque=quis',
    tags: [
      'Comedy|Drama',
      'Comedy',
      'Action|Horror|Thriller',
      'Action|Sci-Fi|Thriller'
    ]
  },
  {
    id: 7,
    title: 'Horatio',
    year: 'Josilevich',
    cover: 'http://dummyimage.com/132x238.bmp/5fa2dd/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 109,
    contentRating: 'PG-13',
    source:
      'https://stanford.edu/sociis.html?in=quisque&congue=erat&etiam=eros&justo=viverra&etiam=eget&pretium=congue&iaculis=eget&justo=semper&in=rutrum&hac=nulla&habitasse=nunc&platea=purus&dictumst=phasellus&etiam=in&faucibus=felis&cursus=donec&urna=semper&ut=sapien&tellus=a&nulla=libero&ut=nam&erat=dui&id=proin&mauris=leo&vulputate=odio&elementum=porttitor',
    tags: ['Comedy|Drama', 'Drama|Horror|Mystery|Thriller', 'Drama']
  },
  {
    id: 8,
    title: 'Forrester',
    year: 'Meron',
    cover: 'http://dummyimage.com/108x193.png/dddddd/000000',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 98,
    contentRating: 'G',
    source:
      'https://linkedin.com/sollicitudin.png?posuere=sapien&felis=sapien&sed=non&lacus=mi&morbi=integer&sem=ac&mauris=neque&laoreet=duis&ut=bibendum',
    tags: ['Children']
  },
  {
    id: 9,
    title: 'Zonda',
    year: 'Bonar',
    cover: 'http://dummyimage.com/121x136.bmp/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 113,
    contentRating: 'G',
    source:
      'https://github.io/neque/sapien.jpg?quis=nec&augue=sem&luctus=duis&tincidunt=aliquam&nulla=convallis&mollis=nunc&molestie=proin&lorem=at&quisque=turpis&ut=a&erat=pede&curabitur=posuere&gravida=nonummy&nisi=integer&at=non&nibh=velit&in=donec&hac=diam&habitasse=neque&platea=vestibulum&dictumst=eget',
    tags: [
      'Drama',
      'Drama',
      'Action|Sci-Fi',
      'Comedy|Drama|Fantasy|Mystery',
      'Documentary'
    ]
  },
  {
    id: 10,
    title: 'Hubey',
    year: 'Piecha',
    cover: 'http://dummyimage.com/201x213.jpg/dddddd/000000',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    duration: 80,
    contentRating: 'PG-13',
    source:
      'http://adobe.com/non/mi.jsp?duis=vestibulum&bibendum=ante&morbi=ipsum&non=primis&quam=in&nec=faucibus&dui=orci&luctus=luctus&rutrum=et&nulla=ultrices&tellus=posuere&in=cubilia&sagittis=curae&dui=mauris&vel=viverra&nisl=diam&duis=vitae&ac=quam&nibh=suspendisse&fusce=potenti&lacus=nullam&purus=porttitor&aliquet=lacus&at=at&feugiat=turpis&non=donec&pretium=posuere&quis=metus&lectus=vitae&suspendisse=ipsum&potenti=aliquam&in=non&eleifend=mauris&quam=morbi&a=non&odio=lectus&in=aliquam&hac=sit&habitasse=amet&platea=diam&dictumst=in&maecenas=magna&ut=bibendum&massa=imperdiet&quis=nullam&augue=orci&luctus=pede&tincidunt=venenatis&nulla=non&mollis=sodales&molestie=sed&lorem=tincidunt&quisque=eu&ut=felis&erat=fusce&curabitur=posuere&gravida=felis&nisi=sed&at=lacus&nibh=morbi&in=sem&hac=mauris&habitasse=laoreet&platea=ut&dictumst=rhoncus&aliquam=aliquet&augue=pulvinar&quam=sed&sollicitudin=nisl&vitae=nunc&consectetuer=rhoncus&eget=dui&rutrum=vel&at=sem&lorem=sed&integer=sagittis&tincidunt=nam&ante=congue&vel=risus&ipsum=semper&praesent=porta&blandit=volutpat&lacinia=quam&erat=pede&vestibulum=lobortis&sed=ligula&magna=sit&at=amet&nunc=eleifend&commodo=pede&placerat=libero&praesent=quis&blandit=orci',
    tags: ['Animation|Children', 'Romance', 'Drama']
  }
];

const filteredMoviesMock = tag => {
  return moviesMock.filter(movie => movie.tags.includes(tag));
};

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = { moviesMock, filteredMoviesMock, MoviesServiceMock };
