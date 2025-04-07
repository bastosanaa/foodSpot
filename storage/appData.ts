
type SocialMedia = {
    instagram: string;
    facebook: string;
  };
  
  type MenuItem = {
    name: string;
    image: string;
    description: string;
    quantity: string;
    ingredients: string[];
    price: number;
  };
  
  type Store = {
    name: string;
    logo: string;
    description: string;
    phone: string;
    whatsapp: string;
    social_media: SocialMedia;
    email: string;
    delivery_link: string;
    menu_link: string;
    menu: MenuItem[];
  };
  
  type Event = {
    day: string;
    event: string;
    video: string;
  };
  
  type AppData = {
    food_hall: {
      name: string;
      address: string;
      map_location: string;
      phone: string;
      whatsapp: string;
      social_media: SocialMedia;
      image: string;
      website: string;
      email: string;
    };
    events: Event[];
    stores: Store[];
  };
  
  const appData: AppData = {
    "food_hall": {
      "name": "foodSpot Food Hall",
      "address": "Rua das Delícias, 123, Centro, São Paulo - SP",
      "map_location": "https://maps.google.com/?q=-23.55052,-46.633308",
      "phone": "(11) 98765-4321",
      "whatsapp": "https://wa.me/5511987654321",
      "social_media": {
        "instagram": "https://instagram.com/foodSpotfoodhall",
        "facebook": "https://facebook.com/foodSpotfoodhall"
      },
      "image": "https://www.wien.info/resource/image/470174/3x2/894/595/fb10aecdcfd02203aa892ead5c061127/949E088108A12037085379002498FFEF/gleisgarten-food-hall.webp",
      "website": "https://foodSpotfoodhall.com.br",
      "email": "contato@foodSpotfoodhall.com.br"
    },
    "events": [
      {
        "day": "Segunda-feira",
        "event": "Happy Hour com Jazz ao Vivo",
        "video": "https://youtu.be/sample1"
      },
      {
        "day": "Terça-feira",
        "event": "Noite de Stand-up Comedy",
        "video": "https://youtu.be/sample2"
      },
      {
        "day": "Quarta-feira",
        "event": "Workshop de Culinária Internacional",
        "video": "https://youtu.be/sample3"
      },
      {
        "day": "Quinta-feira",
        "event": "Sarau de Poesia e Música Acústica",
        "video": "https://youtu.be/sample4"
      },
      {
        "day": "Sexta-feira",
        "event": "Show de Rock com Banda Local",
        "video": "https://youtu.be/sample5"
      },
      {
        "day": "Sábado",
        "event": "Feira Gastronômica e DJs",
        "video": "https://youtu.be/sample6"
      },
      {
        "day": "Domingo",
        "event": "Almoço Especial com MPB",
        "video": "https://youtu.be/sample7"
      }
    ],
    "stores": [
      {
        "name": "Italian Pizza",
        "logo": "https://img.freepik.com/vetores-premium/logotipo-da-pizza-italiana-com-uma-pizza-e-um-chef-segurando-uma-pizza_850580-18.jpg",
        "description": "Pizza artesanal no forno à lenha, direto da tradição italiana. Ingredientes frescos e sabores marcantes.",
        "phone": "(11) 91234-5678",
        "whatsapp": "https://wa.me/5511912345678",
        "social_media": {
          "instagram": "https://instagram.com/pizzasuprema",
          "facebook": "https://facebook.com/pizzasuprema"
        },
        "email": "contato@pizzasuprema.com",
        "delivery_link": "https://ifood.com/pizzasuprema",
        "menu_link": "https://pizzasuprema.com/cardapio",
"menu": [
        {
          "name": "Pizza Margherita",
          "image": "https://media.istockphoto.com/id/1314077882/pt/foto/pizza-basil-tomato-and-mozzarella.webp?a=1&b=1&s=612x612&w=0&k=20&c=LLhnKQFX_Dt4nNGwXpOj6VF1WJALiYf1eCYHTTmw-Os=",
          "description": "Clássica italiana com massa artesanal, molho de tomate rústico, muçarela de búfala, manjericão fresco e fio de azeite.",
          "quantity": "35cm",
          "ingredients": [
            "Massa artesanal",
            "Molho de tomate",
            "Muçarela de búfala",
            "Manjericão",
            "Azeite extravirgem"
          ],
          "price": 39.90
        },
        {
          "name": "Pizza Pepperoni",
          "image": "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emElMjBwZXBwZXJvbml8ZW58MHx8MHx8fDA%3D",
          "description": "Base fina e crocante com molho especial da casa, muçarela gratinada e generosas fatias de pepperoni levemente picante.",
          "quantity": "35cm",
          "ingredients": [
            "Massa fina",
            "Molho de tomate da casa",
            "Muçarela",
            "Pepperoni artesanal"
          ],
          "price": 44.90
        },
        {
          "name": "Pizza Veggie",
          "image": "https://images.unsplash.com/photo-1743615357602-f0711d1bc06f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBpenphJTIwdmVnZ2llfGVufDB8fDB8fHww",
          "description": "Opção vegetariana com legumes grelhados, queijo vegano e toque de orégano fresco.",
          "quantity": "35cm",
          "ingredients": [
            "Berinjela",
            "Abobrinha",
            "Pimentões",
            "Molho de tomate",
            "Queijo vegano"
          ],
          "price": 42.50
        },
        {
          "name": "Pizza Quatro Queijos",
          "image": "https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
          "description": "Combinação irresistível de muçarela, provolone, gorgonzola e parmesão sobre massa de longa fermentação.",
          "quantity": "35cm",
          "ingredients": [
            "Muçarela",
            "Provolone",
            "Gorgonzola",
            "Parmesão",
            "Molho de tomate"
          ],
          "price": 46.90
        },
        {
          "name": "Pizza Kids Mini Mozzarella",
          "image": "https://images.unsplash.com/photo-1627626775846-122b778965ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
          "description": "Versão infantil com massa leve, molho suave e muçarela gratinada. Acompanha suco natural.",
          "quantity": "20cm",
          "ingredients": [
            "Massa leve",
            "Molho de tomate suave",
            "Muçarela",
            "Orégano"
          ],
          "price": 29.00
        }
      ]

      },
      {
        "name": "Burguer Smash",
        "logo": "https://i.pinimg.com/736x/0d/3f/b7/0d3fb7ddf028fe22b05d56945708537a.jpg",
        "description": "Hambúrgueres grelhados na chapa com carnes selecionadas e molhos artesanais.",
        "phone": "(11) 97654-3210",
        "whatsapp": "https://wa.me/5511976543210",
        "social_media": {
          "instagram": "https://instagram.com/hamburgueriasmash",
          "facebook": "https://facebook.com/hamburgueriasmash"
        },
        "email": "contato@hamburgueriasmash.com",
        "delivery_link": "https://ifood.com/hamburgueriasmash",
        "menu_link": "https://hamburgueriasmash.com/cardapio",
"menu": [
          {
            "name": "Smash Burger Clássico",
            "image": "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hc2glMjBidXJndWVyfGVufDB8fDB8fHww",
            "description": "O clássico da casa: pão brioche tostado, hambúrguer smash suculento, queijo cheddar derretido e molho da casa.",
            "quantity": "180g",
            "ingredients": [
              "Pão brioche",
              "Hambúrguer smash",
              "Queijo cheddar",
              "Molho especial da casa"
            ],
            "price": 24.90
          },
          {
            "name": "Smash Veggie",
            "image": "https://images.unsplash.com/photo-1585238341267-1cfec2046a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hc2glMjBidXJndWVyJTIwdmVnZ2llfGVufDB8fDB8fHww",
            "description": "Opção vegetariana com hambúrguer de grão de bico, vegetais frescos e maionese artesanal de alho.",
            "quantity": "150g",
            "ingredients": [
              "Grão de bico",
              "Alface",
              "Tomate",
              "Maionese de alho"
            ],
            "price": 27.90
          },
          {
            "name": "Kids Mini Smash",
            "image": "https://plus.unsplash.com/premium_photo-1684534125392-e527ed4024e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hc2glMjBidXJndWVyfGVufDB8fDB8fHww",
            "description": "Perfeito para os pequenos: pão mini, hamburguinho grelhado, queijo suave e porção de batatinhas.",
            "quantity": "100g",
            "ingredients": [
              "Pão mini",
              "Mini hambúrguer",
              "Queijo prato",
              "Batatinhas fritas"
            ],
            "price": 18.00
          },
          {
            "name": "Double Bacon Smash",
            "image": "https://plus.unsplash.com/premium_photo-1738431707796-15850af48b26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hc2glMjBidXJndWVyJTIwYmFjb258ZW58MHx8MHx8fDA%3D",
            "description": "Dois burgers smash, queijo cheddar duplo, bacon crocante, cebola roxa e molho defumado no brioche.",
            "quantity": "250g",
            "ingredients": [
              "2x Smash Burger",
              "Queijo cheddar",
              "Bacon crocante",
              "Cebola roxa",
              "Molho defumado",
              "Pão brioche"
            ],
            "price": 32.90
          },
          {
            "name": "Smash Chicken",
            "image": "https://images.unsplash.com/photo-1648580852350-3098af89f110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hc2glMjBjaGlja2VuJTIwYnVyZ3VlcnxlbnwwfHwwfHx8MA%3D%3D",
            "description": "Sanduíche de frango empanado crocante com cheddar, alface americana e maionese picante.",
            "quantity": "200g",
            "ingredients": [
              "Frango empanado",
              "Queijo cheddar",
              "Alface americana",
              "Maionese picante",
              "Pão brioche"
            ],
            "price": 29.50
          }
        ]
      },
      {
        "name": "Sakura Oriental",
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGEF0VIjtDzih9OU718uHVG3trOdo5awD9Q&s",
        "description": "Delícias da culinária asiática com sushis frescos, yakisobas e opções vegetarianas.",
        "phone": "(11) 98888-1111",
        "whatsapp": "https://wa.me/5511988881111",
        "social_media": {
          "instagram": "https://instagram.com/sakuraoriental",
          "facebook": "https://facebook.com/sakuraoriental"
        },
        "email": "contato@sakuraoriental.com",
        "delivery_link": "https://ifood.com/sakuraoriental",
        "menu_link": "https://sakuraoriental.com/cardapio",
        "menu": [
          {
            "name": "Combinado Sushi 12 Peças",
            "image": "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
            "description": "8 uramakis e 4 niguiris frescos com peixes selecionados e arroz temperado na medida certa.",
            "quantity": "12 unidades",
            "ingredients": [
              "Salmão",
              "Arroz",
              "Nori",
              "Cream cheese",
              "Pepino"
            ],
            "price": 48.00
          },
          {
            "name": "Yakisoba Vegetariano",
            "image": "https://plus.unsplash.com/premium_photo-1664475934279-2631a25c42ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eWFraXNvYmF8ZW58MHx8MHx8fDA%3D",
            "description": "Macarrão oriental com legumes crocantes salteados em molho shoyu levemente adocicado.",
            "quantity": "350g",
            "ingredients": [
              "Macarrão",
              "Brócolis",
              "Cenoura",
              "Couve-flor",
              "Molho shoyu"
            ],
            "price": 32.50
          },
          {
            "name": "Tempurá de Legumes",
            "image": "https://plus.unsplash.com/premium_photo-1666920344211-88611229ce09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVtcHVyYXxlbnwwfHwwfHx8MA%3D%3D",
            "description": "Crocantes pedaços de cenoura, abobrinha e berinjela empanados em massa leve e fritos à perfeição.",
            "quantity": "200g",
            "ingredients": [
              "Cenoura",
              "Abobrinha",
              "Berinjela",
              "Farinha de trigo",
              "Gelo"
            ],
            "price": 27.90
          },
          {
            "name": "Sashimi Salmão Premium",
            "image": "https://images.unsplash.com/photo-1546530785-86397501ae20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhc2hpbWklMjBzdXNoaXxlbnwwfHwwfHx8MA%3D%3D",
            "description": "Fatias de salmão fresco e selecionado, servidas com wasabi e shoyu especial da casa.",
            "quantity": "8 fatias",
            "ingredients": [
              "Salmão fresco",
              "Shoyu",
              "Wasabi",
              "Gengibre"
            ],
            "price": 52.00
          },
        ]
      },
      {
        "name": "Brigadeiro",
        "logo": "https://img.freepik.com/vetores-gratis/bolinho-de-chocolate-adoravel-mao-desenhada_23-2147995755.jpg",
        "description": "Doces artesanais e sobremesas irresistíveis para adoçar seu dia.",
        "phone": "(11) 99876-5432",
        "whatsapp": "https://wa.me/5511998765432",
        "social_media": {
          "instagram": "https://instagram.com/brigadeiro",
          "facebook": "https://facebook.com/brigadeiro"
        },
        "email": "contato@brigadeiro.com",
        "delivery_link": "https://ifood.com/brigadeiro",
        "menu_link": "https://brigadeiro.com/cardapio",
        "menu": [
          {
            "name": "Brownie com Sorvete",
            "image": "https://images.unsplash.com/photo-1639744093694-4225490cf1d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyb3duaWUlMjBpY2VjcmVhbXxlbnwwfHwwfHx8MA%3D%3D",
            "description": "Brownie de chocolate belga, macio por dentro e crocante por fora, servido com uma generosa bola de sorvete de creme.",
            "quantity": "200g",
            "ingredients": [
              "Chocolate belga",
              "Ovos",
              "Manteiga",
              "Açúcar",
              "Sorvete de creme"
            ],
            "price": 19.90
          },
          {
            "name": "Mini Donuts Kids",
            "image": "https://plus.unsplash.com/premium_photo-1664472607092-2f28b4b14b55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvbnV0fGVufDB8fDB8fHww",
            "description": "Donuts pequenos e fofinhos, decorados com confeitos coloridos e cobertura de chocolate branco. Preferido das crianças!",
            "quantity": "6 unidades",
            "ingredients": [
              "Farinha",
              "Açúcar",
              "Fermento",
              "Chocolate branco",
              "Confeitos"
            ],
            "price": 16.00
          },
          {
            "name": "Brigadeiro Clássico",
            "image": "https://images.unsplash.com/photo-1649019840580-9be328933266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJpZ2FkZWlyb3xlbnwwfHwwfHx8MA%3D%3D",
            "description": "O autêntico brigadeiro brasileiro, feito com leite condensado, chocolate e coberto com granulado crocante.",
            "quantity": "4 unidades",
            "ingredients": [
              "Leite condensado",
              "Chocolate em pó",
              "Manteiga",
              "Granulado"
            ],
            "price": 12.00
          },
          {
            "name": "Torta de Limão",
            "image": "https://images.unsplash.com/photo-1586718418497-76bcc1e1dbfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9ydGElMjBkZSUyMGxpbWFvfGVufDB8fDB8fHww",
            "description": "Base crocante com creme de limão siciliano e cobertura suave de merengue maçaricado.",
            "quantity": "1 fatia",
            "ingredients": [
              "Bolacha triturada",
              "Limão siciliano",
              "Leite condensado",
              "Merengue"
            ],
            "price": 17.50
          },
          {
            "name": "Banoffee",
            "image": "https://media.istockphoto.com/id/1412705375/pt/foto/banoffee-cake-with-banana-and-caramel-sauce-filling-sprinkled-with-grated-dark-chocolate-on.jpg?s=2048x2048&w=is&k=20&c=70dR_BP3cNjvhFa7r8xAESLsy3U1NCUFVKWuiMUUjoo=",
            "description": "Sobremesa em camadas com banana, doce de leite, chantilly e farofa de biscoito. Servido gelado no copo.",
            "quantity": "1 fatia",
            "ingredients": [
              "Banana",
              "Doce de leite",
              "Chantilly",
              "Bolacha triturada"
            ],
            "price": 21.00
          }
        ]

      },
      {
        "name": "Juice Time",
        "logo": "https://images-platform.99static.com/O9od9uKiemexps_5F2omwGHRp7o=/113x94:1032x1013/fit-in/500x500/99designs-contests-attachments/70/70902/attachment_70902093",
        "description": "Culinária leve e saudável com foco em ingredientes naturais e frescos.",
        "phone": "(11) 97777-8888",
        "whatsapp": "https://wa.me/5511977778888",
        "social_media": {
          "instagram": "https://instagram.com/juicetime",
          "facebook": "https://facebook.com/juicetime"
        },
        "email": "contato@juicetime.com",
        "delivery_link": "https://ifood.com/juicetime",
        "menu_link": "https://juicetime.com/cardapio",
        "menu": [
          {
            "name": "Salada Detox",
            "image": "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhbGFkfGVufDB8fDB8fHww",
            "description": "Mix de folhas verdes orgânicas, cenoura ralada, beterraba, quinoa e molho de limão com azeite extra virgem.",
            "quantity": "400g",
            "ingredients": [
              "Folhas verdes",
              "Quinoa",
              "Beterraba",
              "Cenoura",
              "Molho de limão",
              "Azeite extravirgem"
            ],
            "price": 28.90
          },
          {
            "name": "Suco Verde Natural",
            "image": "https://media.istockphoto.com/id/485131020/pt/foto/verde-sumo-de-vegetais-na-mesa-de-madeira-r%C3%BAstico.webp?a=1&b=1&s=612x612&w=0&k=20&c=vbaoj_e6x1J5IhgaQuBHYhMcTX3ptJ8RBHaJhZkzNX4=",
            "description": "Bebida revigorante e funcional com couve, maçã verde, limão tahiti e gengibre fresco prensados a frio.",
            "quantity": "300ml",
            "ingredients": [
              "Couve",
              "Maçã verde",
              "Limão",
              "Gengibre"
            ],
            "price": 12.00
          },
          {
            "name": "Bowl Energético com Frutas",
            "image": "https://media.istockphoto.com/id/1350630657/pt/foto/close-up-shot-of-a-healthy-acai-food-bowl-on-a-wooden-table-outdoors-in-the-summer.webp?a=1&b=1&s=612x612&w=0&k=20&c=h8Rr6flg259NOH8ZclRZ718KgfWyFzl_69zlvbj30xY=",
            "description": "Base de açaí e banana batidos, coberta com morango, granola sem açúcar e lascas de coco.",
            "quantity": "350ml",
            "ingredients": [
              "Açaí",
              "Banana",
              "Morango",
              "Granola sem açúcar",
              "Coco em lascas"
            ],
            "price": 24.90
          },
          {
            "name": "Wrap de Grão-de-Bico com Tahine",
            "image": "https://images.unsplash.com/photo-1585238342107-49a3cdace47f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d3JhcHxlbnwwfHwwfHx8MA%3D%3D",
            "description": "Pão folha recheado com homus, tomate seco, rúcula e tahine. 100% vegano.",
            "quantity": "180g",
            "ingredients": [
              "Homus",
              "Tomate seco",
              "Rúcula",
              "Tahine",
              "Pão folha"
            ],
            "price": 22.50
          },
          {
            "name": "Cookie de Aveia e Cacau",
            "image": "https://images.unsplash.com/photo-1631311253861-52eaf0337adb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b2F0JTIwY29va2llfGVufDB8fDB8fHww",
            "description": "Cookie artesanal sem lactose, com aveia, cacau, banana e chips de chocolate amargo.",
            "quantity": "60g",
            "ingredients": [
              "Aveia",
              "Banana",
              "Cacau",
              "Chocolate 70%",
              "Óleo de coco"
            ],
            "price": 9.00
          }
        ]
      }
    ]
  };
  
  export default appData;