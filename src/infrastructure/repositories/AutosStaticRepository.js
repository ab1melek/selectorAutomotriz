import { AutoRepository } from '../../domain/repositories/AutoRepository.js';
import { Auto } from '../../domain/entities/Auto.js';

/**
 * AutosStaticRepository - Catálogo de 50 autos 2025 más vendidos en México
 * 
 * CRITERIOS DE SELECCIÓN POR PERSONALIDAD:
 * =========================================
 * 
 * 1. ANALÍTICO/ORGANIZADO → Confiables, tecnológicos, eficientes
 *    Autos: Toyota Corolla, Honda Civic, Mazda3, VW Jetta
 * 
 * 2. AVENTURERO/ESPONTÁNEO → SUVs, AWD, versátiles
 *    Autos: X-Trail, RAV4, CR-V, Sportage, Tucson
 * 
 * 3. CREATIVO/EXPRESIVO → Diseños modernos, distintivos
 *    Autos: Mazda CX-30, SEAT León, BMW
 * 
 * 4. PRÁCTICO/ECONÓMICO → Bajo consumo, accesibles
 *    Autos: March, Aveo, Yaris, Rio, Accent
 * 
 * 5. FAMILIAR/PROTECTOR → 7 pasajeros, espaciosos, seguros
 *    Autos: X-Trail, Highlander, Santa Fe
 * 
 * 6. DEPORTIVO/JOVEN → Deportivos, potentes, dinámicos
 *    Autos: Civic, Mazda3 Turbo, Elantra, K5
 * 
 * 7. PREMIUM/EXITOSO → Lujo, status, ejecutivos
 *    Autos: BMW, Mercedes-Benz, Camry, Accord
 */
export class AutosStaticRepository extends AutoRepository {
  constructor() {
    super();
    this.autos = this.inicializarAutos();
  }

  inicializarAutos() {
    const autosData = [
      // ==================== NISSAN (5) ====================
      {
        id: 'nissan-versa',
        marca: 'Nissan',
        modelo: 'Versa',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$280,000 - $350,000 MXN',
        caracteristicas: ['Económico', 'Espacioso', 'Urbano', 'Accesible', 'Confiable'],
        personalidades: ['Práctico', 'Económico', 'Organizado'],
        imagen: 'https://i.blogs.es/8375fb/captura-de-pantalla-2025-01-15-a-las-20.46.10/840_560.png',
        ventaEnMexico: true
      },
      {
        id: 'nissan-kicks',
        marca: 'Nissan',
        modelo: 'Kicks',
        año: 2025,
        segmento: 'SUV Subcompacta',
        precio: '$350,000 - $450,000 MXN',
        caracteristicas: ['Urbana', 'Práctica', 'Eficiente', 'Moderna', 'Accesible'],
        personalidades: ['Práctico', 'Joven', 'Urbano'],
        imagen: 'https://us.as.com/autos/wp-content/uploads/2024/08/MM5R7069-Edit-1264x734.jpg',
        ventaEnMexico: true
      },
      {
        id: 'nissan-sentra',
        marca: 'Nissan',
        modelo: 'Sentra',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$380,000 - $480,000 MXN',
        caracteristicas: ['Elegante', 'Cómodo', 'Tecnológico', 'Eficiente', 'Espacioso'],
        personalidades: ['Organizado', 'Profesional', 'Familiar'],
        imagen: 'https://us.as.com/autos/wp-content/uploads/2024/08/2024NissanSentraE-10.jpg',
        ventaEnMexico: true
      },
      {
        id: 'nissan-x-trail',
        marca: 'Nissan',
        modelo: 'X-Trail',
        año: 2025,
        segmento: 'SUV Mediana',
        precio: '$550,000 - $700,000 MXN',
        caracteristicas: ['7 pasajeros', 'Familiar', 'Aventurera', 'AWD', 'Versátil'],
        personalidades: ['Familiar', 'Aventurero', 'Protector'],
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0W0q1aajzVcg5e6Dv17cV3nY6erkojvn-A&s',
        ventaEnMexico: true
      },
      {
        id: 'nissan-march',
        marca: 'Nissan',
        modelo: 'March',
        año: 2025,
        segmento: 'Hatchback Subcompacto',
        precio: '$220,000 - $280,000 MXN',
        caracteristicas: ['Económico', 'Ágil', 'Urbano', 'Primer auto', 'Bajo consumo'],
        personalidades: ['Económico', 'Joven', 'Práctico'],
        imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_e374a280425c4d91a474d96138b73d05.webp',
        ventaEnMexico: true
      },

      // ==================== CHEVROLET (5) ====================
      {
        id: 'chevrolet-aveo',
        marca: 'Chevrolet',
        modelo: 'Aveo',
        año: 2025,
        segmento: 'Sedán Subcompacto',
        precio: '$260,000 - $320,000 MXN',
        caracteristicas: ['Económico', 'Práctico', 'Urbano', 'Accesible', 'Funcional'],
        personalidades: ['Económico', 'Práctico', 'Urbano'],
        imagen: 'https://cdn.wheel-size.com/automobile/body/chevrolet-aveo-2023-2026-1755860844.1143277.jpg',
        ventaEnMexico: true
      },
      {
        id: 'chevrolet-onix',
        marca: 'Chevrolet',
        modelo: 'Onix',
        año: 2025,
        segmento: 'Sedán Subcompacto',
        precio: '$290,000 - $360,000 MXN',
        caracteristicas: ['Moderno', 'Tecnológico', 'Eficiente', 'Espacioso', 'Conectado'],
        personalidades: ['Joven', 'Tecnológico', 'Moderno'],
        imagen: 'https://autotest.com.ar/wp-content/uploads/2024/08/Chevrolet-Onix-2025-frente.jpg',
        ventaEnMexico: true
      },
      {
        id: 'chevrolet-cavalier',
        marca: 'Chevrolet',
        modelo: 'Cavalier',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$340,000 - $420,000 MXN',
        caracteristicas: ['Familiar', 'Amplio', 'Cómodo', 'Seguro', 'Confiable'],
        personalidades: ['Familiar', 'Protector', 'Confiable'],
        imagen: 'https://s1.cdn.autoevolution.com/images/news/2025-chevy-cavalier-puts-on-a-cgi-suit-and-takes-a-digital-swing-at-the-nissan-versa-232192_1.jpg',
        ventaEnMexico: true
      },
      {
        id: 'chevrolet-equinox',
        marca: 'Chevrolet',
        modelo: 'Equinox',
        año: 2025,
        segmento: 'SUV Compacta',
        precio: '$520,000 - $650,000 MXN',
        caracteristicas: ['Versátil', 'Familiar', 'Segura', 'Práctica', 'AWD'],
        personalidades: ['Familiar', 'Versátil', 'Práctico'],
        imagen: 'https://acnews.blob.core.windows.net/imgnews/paragraph/NPAZ_563e94c3bbcb4f8fb08939f45c3b780d.webp',
        ventaEnMexico: true
      },
      {
        id: 'chevrolet-blazer',
        marca: 'Chevrolet',
        modelo: 'Blazer',
        año: 2025,
        segmento: 'SUV Mediana',
        precio: '$680,000 - $850,000 MXN',
        caracteristicas: ['Americana', 'Espaciosa', 'Potente', 'Moderna', 'Tecnológica'],
        personalidades: ['Aventurero', 'Familiar', 'Premium'],
        imagen: 'https://news.chevrolet.com.mx/content/Pages/news/mx/es/2024/sep/0917-BlazerEV/jcr:content/image.resize.maxw_1200.jpg/1726597000490.jpg',
        ventaEnMexico: true
      },

      // ==================== VOLKSWAGEN (4) ====================
      {
        id: 'volkswagen-vento',
        marca: 'Volkswagen',
        modelo: 'Vento',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$320,000 - $400,000 MXN',
        caracteristicas: ['Alemán', 'Robusto', 'Eficiente', 'Confiable', 'Clásico'],
        personalidades: ['Confiable', 'Clásico', 'Organizado'],
        imagen: 'https://fotos.perfil.com/2024/08/28/volkswagen-vento-gli-1862687.jpg',
        ventaEnMexico: true
      },
      {
        id: 'volkswagen-jetta',
        marca: 'Volkswagen',
        modelo: 'Jetta',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$420,000 - $520,000 MXN',
        caracteristicas: ['Clásico', 'Confiable', 'Eficiente', 'Espacioso', 'Premium'],
        personalidades: ['Profesional', 'Confiable', 'Premium'],
        imagen: 'https://us.as.com/autos/wp-content/uploads/2024/06/pixelcut-export-2024-06-26T091457.427-1264x734.jpg',
        ventaEnMexico: true
      },
      {
        id: 'volkswagen-tiguan',
        marca: 'Volkswagen',
        modelo: 'Tiguan',
        año: 2025,
        segmento: 'SUV Compacta',
        precio: '$580,000 - $720,000 MXN',
        caracteristicas: ['Alemana', 'Premium', 'Espaciosa', 'Tecnológica', 'AWD'],
        personalidades: ['Familiar', 'Premium', 'Aventurero'],
        imagen: 'https://fotos.perfil.com//2024/11/25/900/0/volkswagen-tiguan-2025-1917914.jpg',
        ventaEnMexico: true
      },
      {
        id: 'volkswagen-taos',
        marca: 'Volkswagen',
        modelo: 'Taos',
        año: 2025,
        segmento: 'SUV Subcompacta',
        precio: '$460,000 - $560,000 MXN',
        caracteristicas: ['Moderna', 'Urbana', 'Tecnológica', 'Versátil', 'Premium'],
        personalidades: ['Urbano', 'Moderno', 'Premium'],
        imagen: 'https://carmania.mx/wp-content/uploads/2024/11/VW_TAOS_FEAT_001_WEB_RGB_20302_M08Y24-scaled.jpg',
        ventaEnMexico: true
      },

      // ==================== TOYOTA (6) ====================
      {
        id: 'toyota-yaris',
        marca: 'Toyota',
        modelo: 'Yaris',
        año: 2025,
        segmento: 'Hatchback Subcompacto',
        precio: '$270,000 - $340,000 MXN',
        caracteristicas: ['Confiable', 'Económico', 'Ágil', 'Duradero', 'Bajo mantenimiento'],
        personalidades: ['Confiable', 'Económico', 'Práctico'],
        imagen: 'https://images.prismic.io/carwow/Z1huVpbqstJ98ROu_LHDToyotaYaris2024-05.jpg',
        ventaEnMexico: true
      },
      {
        id: 'toyota-corolla',
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$400,000 - $500,000 MXN',
        caracteristicas: ['Confiable', 'Híbrido', 'Duradero', 'Seguro', 'Eficiente'],
        personalidades: ['Organizado', 'Confiable', 'Ecológico'],
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_698834-MLA81190899847_122024-F.jpg',
        ventaEnMexico: true
      },
      {
        id: 'toyota-corolla-cross',
        marca: 'Toyota',
        modelo: 'Corolla Cross',
        año: 2025,
        segmento: 'SUV Compacta',
        precio: '$420,000 - $520,000 MXN',
        caracteristicas: ['Eficiente', 'Práctica', 'Urbana', 'Moderna', 'Confiable'],
        personalidades: ['Práctico', 'Moderno', 'Familiar'],
        imagen: 'https://hips.hearstapps.com/hmg-prod/images/2022-toyota-corolla-cross-137-1639018362.jpg',
        ventaEnMexico: true
      },
      {
        id: 'toyota-camry',
        marca: 'Toyota',
        modelo: 'Camry',
        año: 2025,
        segmento: 'Sedán Mediano',
        precio: '$520,000 - $650,000 MXN',
        caracteristicas: ['Híbrido', 'Confiable', 'Elegante', 'Eficiente', 'Espacioso'],
        personalidades: ['Ejecutivo', 'Premium', 'Confiable'],
        imagen: 'https://pressroom-manager.toyota.mx/storage/noticias/590/image.jpg',
        ventaEnMexico: true
      },
      {
        id: 'toyota-rav4',
        marca: 'Toyota',
        modelo: 'RAV4',
        año: 2025,
        segmento: 'SUV Compacta',
        precio: '$580,000 - $720,000 MXN',
        caracteristicas: ['Híbrida', 'Aventurera', 'AWD', 'Confiable', 'Versátil'],
        personalidades: ['Aventurero', 'Familiar', 'Ecológico'],
        imagen: 'https://cdn.motor1.com/images/mgl/W8MwbN/s1/nuevo-toyota-rav4-2025.jpg',
        ventaEnMexico: true
      },
      {
        id: 'toyota-highlander',
        marca: 'Toyota',
        modelo: 'Highlander',
        año: 2025,
        segmento: 'SUV Familiar',
        precio: '$750,000 - $950,000 MXN',
        caracteristicas: ['7 pasajeros', 'Híbrido', 'Segura', 'Versátil', 'AWD'],
        personalidades: ['Familiar', 'Protector', 'Premium'],
        imagen: 'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-highlander-102-66e97932a6f77.jpg',
        ventaEnMexico: true
      },

      // ==================== HONDA (5) ====================
      {
        id: 'honda-city',
        marca: 'Honda',
        modelo: 'City',
        año: 2025,
        segmento: 'Sedán Subcompacto',
        precio: '$320,000 - $390,000 MXN',
        caracteristicas: ['Compacto', 'Eficiente', 'Urbano', 'Moderno', 'Confiable'],
        personalidades: ['Urbano', 'Eficiente', 'Moderno'],
        imagen: 'https://autotest.com.ar/wp-content/uploads/2024/02/Honda-City-hatchback-2025-tailandia-frente.jpg',
        ventaEnMexico: true
      },
      {
        id: 'honda-civic',
        marca: 'Honda',
        modelo: 'Civic',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$450,000 - $550,000 MXN',
        caracteristicas: ['Deportivo', 'Moderno', 'Tecnológico', 'Eficiente', 'Joven'],
        personalidades: ['Deportivo', 'Joven', 'Tecnológico'],
        imagen: 'https://us.as.com/autos/wp-content/uploads/2024/06/Civic-2025.jpg',
        ventaEnMexico: true
      },
      {
        id: 'honda-hr-v',
        marca: 'Honda',
        modelo: 'HR-V',
        año: 2025,
        segmento: 'SUV Subcompacta',
        precio: '$420,000 - $520,000 MXN',
        caracteristicas: ['Versátil', 'Urbana', 'Práctica', 'Moderna', 'Espaciosa'],
        personalidades: ['Versátil', 'Práctico', 'Urbano'],
        imagen: 'https://i.ytimg.com/vi/hF_tihchjdc/hq720.jpg',
        ventaEnMexico: true
      },
      {
        id: 'honda-cr-v',
        marca: 'Honda',
        modelo: 'CR-V',
        año: 2025,
        segmento: 'SUV Compacta',
        precio: '$580,000 - $720,000 MXN',
        caracteristicas: ['Espaciosa', 'Versátil', 'Familiar', 'Segura', 'AWD'],
        personalidades: ['Familiar', 'Confiable', 'Versátil'],
        imagen: 'https://hips.hearstapps.com/hmg-prod/images/2025-honda-cr-v-hybrid-awd-sport-touring-102-679407cb80051.jpg',
        ventaEnMexico: true
      },
      {
        id: 'honda-accord',
        marca: 'Honda',
        modelo: 'Accord',
        año: 2025,
        segmento: 'Sedán Mediano',
        precio: '$550,000 - $680,000 MXN',
        caracteristicas: ['Elegante', 'Potente', 'Tecnológico', 'Amplio', 'Premium'],
        personalidades: ['Ejecutivo', 'Deportivo', 'Premium'],
        imagen: 'https://http2.mlstatic.com/D_NQ_904190-MLA80857538681_112024-OO.jpg',
        ventaEnMexico: true
      },

      // ==================== MAZDA (5) ====================
      {
        id: 'mazda-2',
        marca: 'Mazda',
        modelo: 'Mazda2',
        año: 2025,
        segmento: 'Hatchback Subcompacto',
        precio: '$290,000 - $350,000 MXN',
        caracteristicas: ['Deportivo', 'Ágil', 'Premium', 'Eficiente', 'Divertido'],
        personalidades: ['Deportivo', 'Joven', 'Dinámico'],
        imagen: 'https://www.deceroacien.com.mx/u/fotografias/m/2024/8/20/f1280x720-42989_174664_5050.jpg',
        ventaEnMexico: true
      },
      {
        id: 'mazda-3',
        marca: 'Mazda',
        modelo: 'Mazda3',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$380,000 - $480,000 MXN',
        caracteristicas: ['Deportivo', 'Premium', 'Elegante', 'Eficiente', 'Tecnología'],
        personalidades: ['Creativo', 'Premium', 'Deportivo'],
        imagen: 'https://autoanalitica.com.mx/wp-content/uploads/2024/06/Mazda3-2025-scaled.jpg',
        ventaEnMexico: true
      },
      {
        id: 'mazda-3-turbo',
        marca: 'Mazda',
        modelo: 'Mazda3 Turbo',
        año: 2025,
        segmento: 'Sedán Deportivo',
        precio: '$480,000 - $580,000 MXN',
        caracteristicas: ['Turbo', 'Premium', 'Deportivo', 'Eficiente', 'Tecnología'],
        personalidades: ['Deportivo', 'Entusiasta', 'Premium'],
        imagen: 'https://www.deceroacien.com.mx/u/fotografias/m/2024/9/18/f850x638-43850_121339_5050.jpg',
        ventaEnMexico: true
      },
      {
        id: 'mazda-cx-30',
        marca: 'Mazda',
        modelo: 'CX-30',
        año: 2025,
        segmento: 'SUV Subcompacta',
        precio: '$420,000 - $540,000 MXN',
        caracteristicas: ['Premium', 'Deportiva', 'Moderna', 'Tecnológica', 'AWD'],
        personalidades: ['Creativo', 'Premium', 'Moderno'],
        imagen: 'https://content.homenetiol.com/2000292/2235906/0x0/98b8db48cd4b43af83beb07a10c0a6e4.jpg',
        ventaEnMexico: true
      },
      {
        id: 'mazda-cx-5',
        marca: 'Mazda',
        modelo: 'CX-5',
        año: 2025,
        segmento: 'SUV Compacta',
        precio: '$520,000 - $680,000 MXN',
        caracteristicas: ['Premium', 'Deportiva', 'Elegante', 'Familiar', 'AWD'],
        personalidades: ['Familiar', 'Premium', 'Deportivo'],
        imagen: 'https://media.ed.edmunds-media.com/mazda/cx-5/2025/oem/2025_mazda_cx-5_4dr-suv_25-carbon-turbo_fq_oem_1_1600.jpg',
        ventaEnMexico: true
      },

      // ==================== KIA (5) ====================
      {
        id: 'kia-rio',
        marca: 'Kia',
        modelo: 'Rio',
        año: 2025,
        segmento: 'Sedán Subcompacto',
        precio: '$280,000 - $350,000 MXN',
        caracteristicas: ['Económico', 'Moderno', 'Garantía', 'Urbano', 'Confiable'],
        personalidades: ['Económico', 'Práctico', 'Confiable'],
        imagen: 'https://www.kiamorelossur.com/blogs/5206/wp-content/uploads/2025/04/19320_2023_Rio.jpg',
        ventaEnMexico: true
      },
      {
        id: 'kia-forte',
        marca: 'Kia',
        modelo: 'Forte',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$360,000 - $450,000 MXN',
        caracteristicas: ['Elegante', 'Tecnológico', 'Garantía', 'Espacioso', 'Moderno'],
        personalidades: ['Organizado', 'Tecnológico', 'Moderno'],
        imagen: 'https://cdn.wheel-size.com/automobile/body/kia-forte-2021-2025-1760682802.8863888.jpg',
        ventaEnMexico: true
      },
      {
        id: 'kia-seltos',
        marca: 'Kia',
        modelo: 'Seltos',
        año: 2025,
        segmento: 'SUV Subcompacta',
        precio: '$380,000 - $480,000 MXN',
        caracteristicas: ['Urbana', 'Joven', 'Práctica', 'Moderna', 'Accesible'],
        personalidades: ['Joven', 'Urbano', 'Aventurero'],
        imagen: 'https://hips.hearstapps.com/hmg-prod/images/2024-kia-seltos-122-64aea9c373ebc.jpg',
        ventaEnMexico: true
      },
      {
        id: 'kia-sportage',
        marca: 'Kia',
        modelo: 'Sportage',
        año: 2025,
        segmento: 'SUV Compacta',
        precio: '$480,000 - $620,000 MXN',
        caracteristicas: ['Moderna', 'Tecnológica', 'Versátil', 'Garantía', 'AWD'],
        personalidades: ['Familiar', 'Tecnológico', 'Moderno'],
        imagen: 'https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2026/sportage-ice/6_desempen/kia-sportage-desempeno-1-w.jpg',
        ventaEnMexico: true
      },
      {
        id: 'kia-k5',
        marca: 'Kia',
        modelo: 'K5',
        año: 2025,
        segmento: 'Sedán Mediano',
        precio: '$520,000 - $650,000 MXN',
        caracteristicas: ['Deportivo', 'Elegante', 'Turbo', 'Premium', 'Tecnología'],
        personalidades: ['Deportivo', 'Premium', 'Ejecutivo'],
        imagen: 'https://cdn-ds.com/blogs-media/sites/701/2024/09/24093945/2025-Kia-K5-Wolf-Gray-B_o.jpg',
        ventaEnMexico: true
      },

      // ==================== HYUNDAI (5) ====================
      {
        id: 'hyundai-accent',
        marca: 'Hyundai',
        modelo: 'Accent',
        año: 2025,
        segmento: 'Sedán Subcompacto',
        precio: '$270,000 - $340,000 MXN',
        caracteristicas: ['Económico', 'Confiable', 'Urbano', 'Garantía', 'Práctico'],
        personalidades: ['Económico', 'Práctico', 'Confiable'],
        imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/04/20230406-HYUNDAI-ACCENT-2024-BASICO-02-750x522.jpg',
        ventaEnMexico: true
      },
      {
        id: 'hyundai-creta',
        marca: 'Hyundai',
        modelo: 'Creta',
        año: 2025,
        segmento: 'SUV Subcompacta',
        precio: '$380,000 - $480,000 MXN',
        caracteristicas: ['Versátil', 'Moderna', 'Tecnológica', 'Urbana', 'Práctica'],
        personalidades: ['Versátil', 'Moderno', 'Urbano'],
        imagen: 'https://i.3dmodels.org/uploads/Hyundai/361_Hyundai_Creta_Mk2f_Ultimate_2025/Hyundai_Creta_Mk2f_Ultimate_2025_1000_0001.jpg',
        ventaEnMexico: true
      },
      {
        id: 'hyundai-elantra',
        marca: 'Hyundai',
        modelo: 'Elantra',
        año: 2025,
        segmento: 'Sedán Compacto',
        precio: '$420,000 - $520,000 MXN',
        caracteristicas: ['Deportivo', 'Tecnológico', 'Moderno', 'Eficiente', 'Premium'],
        personalidades: ['Deportivo', 'Tecnológico', 'Moderno'],
        imagen: 'https://siempreauto.com/wp-content/uploads/sites/9/2024/07/2025Elantra-1.jpg',
        ventaEnMexico: true
      },
      {
        id: 'hyundai-tucson',
        marca: 'Hyundai',
        modelo: 'Tucson',
        año: 2025,
        segmento: 'SUV Compacta',
        precio: '$490,000 - $640,000 MXN',
        caracteristicas: ['Híbrida', 'Futurista', 'Tecnológica', 'Segura', 'AWD'],
        personalidades: ['Futurista', 'Tecnológico', 'Familiar'],
        imagen: 'https://www.carpro.com/hubfs/2025-hyundai-tucson-hero-ap.jpg',
        ventaEnMexico: true
      },
      {
        id: 'hyundai-santa-fe',
        marca: 'Hyundai',
        modelo: 'Santa Fe',
        año: 2025,
        segmento: 'SUV Mediana',
        precio: '$680,000 - $850,000 MXN',
        caracteristicas: ['7 pasajeros', 'Híbrida', 'Familiar', 'Lujosa', 'AWD'],
        personalidades: ['Familiar', 'Premium', 'Protector'],
        imagen: 'https://carnovo.com/wp-content/uploads/2025/01/hyundai-santa-fe.jpg',
        ventaEnMexico: true
      },

      // ==================== PREMIUM (5) ====================
      {
        id: 'bmw-x1',
        marca: 'BMW',
        modelo: 'X1',
        año: 2025,
        segmento: 'SUV Premium Compacta',
        precio: '$780,000 - $920,000 MXN',
        caracteristicas: ['Lujo', 'Deportiva', 'Premium', 'Tecnológica', 'AWD'],
        personalidades: ['Exitoso', 'Deportivo', 'Premium'],
        imagen: 'https://cdcssl.ibsrv.net/autodata/images/?img=USD40BMS252A01300.jpg',
        ventaEnMexico: true
      },
      {
        id: 'bmw-330i',
        marca: 'BMW',
        modelo: '330i',
        año: 2025,
        segmento: 'Sedán Premium',
        precio: '$850,000 - $1,000,000 MXN',
        caracteristicas: ['Deportivo', 'Lujo', 'Potente', 'Tecnológico', 'Premium'],
        personalidades: ['Ejecutivo', 'Deportivo', 'Exitoso'],
        imagen: 'https://vehicle-images.dealerinspire.com/0255-110008857/3MW69FF09R8D83303/0af9ed62a12c94d5f9f13cba274b54c9.jpg',
        ventaEnMexico: true
      },
      {
        id: 'mercedes-gla',
        marca: 'Mercedes-Benz',
        modelo: 'GLA',
        año: 2025,
        segmento: 'SUV Premium Compacta',
        precio: '$820,000 - $980,000 MXN',
        caracteristicas: ['Lujo', 'Compacta', 'Elegante', 'Tecnológica', 'AWD'],
        personalidades: ['Elegante', 'Premium', 'Urbano'],
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2018_Mercedes-Benz_GLA_220_AMG_Line_Exclusive_Diesel_4MATIC_2.1_Front.jpg/960px-2018_Mercedes-Benz_GLA_220_AMG_Line_Exclusive_Diesel_4MATIC_2.1_Front.jpg',
        ventaEnMexico: true
      },
      {
        id: 'mercedes-c-class',
        marca: 'Mercedes-Benz',
        modelo: 'Clase C',
        año: 2025,
        segmento: 'Sedán Premium',
        precio: '$900,000 - $1,150,000 MXN',
        caracteristicas: ['Lujo', 'Elegante', 'Refinado', 'Tecnológico', 'Exclusivo'],
        personalidades: ['Ejecutivo', 'Elegante', 'Exitoso'],
        imagen: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/C-Class/10858/1755843786675/front-left-side-47.jpg',
        ventaEnMexico: true
      },
      {
        id: 'seat-leon',
        marca: 'SEAT',
        modelo: 'León',
        año: 2025,
        segmento: 'Hatchback Compacto',
        precio: '$420,000 - $520,000 MXN',
        caracteristicas: ['Deportivo', 'Premium', 'Tecnológico', 'Europeo', 'Potente'],
        personalidades: ['Deportivo', 'Joven', 'Europeo'],
        imagen: 'https://www.topgear.com/sites/default/files/images/news-article/2016/10/d3eeadd8af8e50112b91f7152290c299/new_seat_leon-014h.jpg',
        ventaEnMexico: true
      }
    ];

    // Usar las URLs de imágenes tal como están en el dataset
    return autosData.map(data => new Auto(data));
  }

  async obtenerTodos() {
    return Promise.resolve([...this.autos]);
  }

  async obtenerPorSegmento(segmento) {
    const autosFiltrados = this.autos.filter(
      auto => auto.segmento.toLowerCase() === segmento.toLowerCase()
    );
    return Promise.resolve(autosFiltrados);
  }

  async obtenerPorId(id) {
    const auto = this.autos.find(auto => auto.id === id);
    return Promise.resolve(auto || null);
  }
}
