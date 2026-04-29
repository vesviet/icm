export interface SubCategory {
  id: string;
  name: string;
  image: string;
  description?: string;
  gallery?: GalleryItem[];
}

export interface GalleryItem {
  src: string;
  label?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  pdfBrochure?: string;
  subcategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: "headwear",
    name: "Custom Headwear",
    description: "Custom caps, visors, and beanies to complete your team or corporate look.",
    image: "/images/products/headwear-hero.png",
    pdfBrochure: "/documents/ICM-eBrochure-Headwear-2024.pdf",
    subcategories: [
                  { id: "trucker-cap", name: "Trucker Cap", image: "/images/products/headwear/trucker-cap.png",
        gallery: [
          { src: "/images/products/headwear/trucker-cap-gallery/1st-Endurance.png", label: "1st Endurance" },
          { src: "/images/products/headwear/trucker-cap-gallery/Bahrain-13.png", label: "Bahrain 13" },
          { src: "/images/products/headwear/trucker-cap-gallery/Bahrain-Victorious-Phoenix.png", label: "Bahrain Victorious Phoenix" },
          { src: "/images/products/headwear/trucker-cap-gallery/Bar-Cliff-Team.png", label: "Bar Cliff Team" },
          { src: "/images/products/headwear/trucker-cap-gallery/Bravo.png", label: "Bravo" },
          { src: "/images/products/headwear/trucker-cap-gallery/Base-Performance.png", label: "Base Performance" },
          { src: "/images/products/headwear/trucker-cap-gallery/Betty-Design.png", label: "Betty Design" },
          { src: "/images/products/headwear/trucker-cap-gallery/Bluejay.png", label: "Bluejay" },
          { src: "/images/products/headwear/trucker-cap-gallery/Boca-Tri.png", label: "Boca Tri" },
          { src: "/images/products/headwear/trucker-cap-gallery/Borah-Teamwear.png", label: "Borah Teamwear" },
          { src: "/images/products/headwear/trucker-cap-gallery/Brazen-Racing.png", label: "Brazen Racing" },
          { src: "/images/products/headwear/trucker-cap-gallery/Colorado-Triathlon-Company.png", label: "Colorado Triathlon Company" },
          { src: "/images/products/headwear/trucker-cap-gallery/Cerverio.png", label: "Dallas Ultra 13.1" },
          { src: "/images/products/headwear/trucker-cap-gallery/Dallas-Ultra-13.1.png", label: "Dallas Ultra 13.1" },
          { src: "/images/products/headwear/trucker-cap-gallery/Detroit.png", label: "Detroit" },
          { src: "/images/products/headwear/trucker-cap-gallery/Every-Man-Jack.png", label: "Every Man Jack" },
          { src: "/images/products/headwear/trucker-cap-gallery/Hard-Rock.png", label: "Hard Rock" },
          { src: "/images/products/headwear/trucker-cap-gallery/HOKA-One-One.png", label: "HOKA One One" },
          { src: "/images/products/headwear/trucker-cap-gallery/HPT-Kona.png", label: "HPT Kona" },
          { src: "/images/products/headwear/trucker-cap-gallery/Indian-lake-Trail-Run.png", label: "Indian lake Trail Run" },
          { src: "/images/products/headwear/trucker-cap-gallery/Landers-Ford.png", label: "Landers Ford" },
          { src: "/images/products/headwear/trucker-cap-gallery/Macca.png", label: "Macca" },
          { src: "/images/products/headwear/trucker-cap-gallery/MaccaX.png", label: "MaccaX" },
          { src: "/images/products/headwear/trucker-cap-gallery/Maple-Grove-Lifetime-Tri.png", label: "Maple Grove Lifetime Tri" },
          { src: "/images/products/headwear/trucker-cap-gallery/Oceanside-Lifetime.png", label: "Oceanside Lifetime" },
          { src: "/images/products/headwear/trucker-cap-gallery/Pauole-Sports.png", label: "Pauole Sports" },
          { src: "/images/products/headwear/trucker-cap-gallery/Pearl-Izumi.png", label: "Pearl Izumi" },
          { src: "/images/products/headwear/trucker-cap-gallery/Race-Slo.png", label: "Race Slo" },
          { src: "/images/products/headwear/trucker-cap-gallery/Red-Coyote-Running.png", label: "Red Coyote Running" },
          { src: "/images/products/headwear/trucker-cap-gallery/River-Running-Company.png", label: "River Running Companyv" },
          { src: "/images/products/headwear/trucker-cap-gallery/Rocket-Racing.png", label: "Rocket Racing" },
          { src: "/images/products/headwear/trucker-cap-gallery/Roka.png", label: "Roka" },
          { src: "/images/products/headwear/trucker-cap-gallery/Run-Detroit.png", label: "Run Detroit" },
          { src: "/images/products/headwear/trucker-cap-gallery/Run-the-Brown-New-Balance.png", label: "Run the Brown – New Balance" },
          { src: "/images/products/headwear/trucker-cap-gallery/Running-Lab.png", label: "Running Lab" },
          { src: "/images/products/headwear/trucker-cap-gallery/Southeast-Junior-Tri-Team-Side.png", label: "Southeast Junior Tri Team Side" },
          { src: "/images/products/headwear/trucker-cap-gallery/St-John.png", label: "St John" },
          { src: "/images/products/headwear/trucker-cap-gallery/Super-League.png", label: "Super League" },
          { src: "/images/products/headwear/trucker-cap-gallery/The-Swedish-Project.png", label: "The Swedish Project" },
          { src: "/images/products/headwear/trucker-cap-gallery/Trisports.png", label: "Trisports" },
          { src: "/images/products/headwear/trucker-cap-gallery/USA-Water-Polo.png", label: "USA Water Polo" },
          { src: "/images/products/headwear/trucker-cap-gallery/U-Warrie-Mountain-Run.png", label: "U Warrie Mountain Run" },
          { src: "/images/products/headwear/trucker-cap-gallery/Vertical-Runner.png", label: "Vertical Runner" },
          { src: "/images/products/headwear/trucker-cap-gallery/Waialai-Golf-Club.png", label: "Waialai Golf Club" },
          { src: "/images/products/headwear/trucker-cap-gallery/Ryan-Bailie-39.png", label: "Ryan Bailie 39" },
          { src: "/images/products/headwear/trucker-cap-gallery/NUUN.png", label: "NUUN" },
          { src: "/images/products/headwear/trucker-cap-gallery/Newton-Running.png", label: "Newton Running" },
          { src: "/images/products/headwear/trucker-cap-gallery/Fleet-Feet-Sports.png", label: "Fleet Feet Sports" },
          { src: "/images/products/headwear/trucker-cap-gallery/BFF-Team.png", label: "BFF Team" }
        ]
      },
                        { id: "baseball-cap", name: "Baseball Cap", image: "/images/products/headwear/baseball-cap.png",
        gallery: [
          { src: "/images/products/headwear/baseball-cap-gallery/Yogahat.png", label: "Yogahat" },
          { src: "/images/products/headwear/baseball-cap-gallery/Yoga.png", label: "Yoga" },
          { src: "/images/products/headwear/baseball-cap-gallery/The-Bluffs.png", label: "The Bluffs" },
          { src: "/images/products/headwear/baseball-cap-gallery/Sotifel.png", label: "Sotifel" },
          { src: "/images/products/headwear/baseball-cap-gallery/Siam-Country-Club.png", label: "Siam Country Club" },
          { src: "/images/products/headwear/baseball-cap-gallery/Allen-Samuels.png", label: "Allen Samuels" },
          { src: "/images/products/headwear/baseball-cap-gallery/AVGA-Side.png", label: "AVGA Side" },
          { src: "/images/products/headwear/baseball-cap-gallery/Bahrain-Victorious.png", label: "Bahrain Victorious" },
          { src: "/images/products/headwear/baseball-cap-gallery/Base-Rochester.png", label: "Base Rochester" },
          { src: "/images/products/headwear/baseball-cap-gallery/Boulder-Rugby.png", label: "Boulder Rugby" },
          { src: "/images/products/headwear/baseball-cap-gallery/BVM-Pub-Grill.png", label: "BVM Pub – Grill" },
          { src: "/images/products/headwear/baseball-cap-gallery/Far-Niente-Wines.png", label: "Far Niente Wines" },
          { src: "/images/products/headwear/baseball-cap-gallery/Habitat-for-Humanity.png", label: "Habitat for Humanity" },
          { src: "/images/products/headwear/baseball-cap-gallery/Mongormery-Link.png", label: "Mongormery Link" },
          { src: "/images/products/headwear/baseball-cap-gallery/Ocean-Dunes-Golf-Club.png", label: "Ocean Dunes Golf Club" },
          { src: "/images/products/headwear/baseball-cap-gallery/Phuoc-Son-Gold-Company.png", label: "Phuoc Son Gold Company" },
          { src: "/images/products/headwear/baseball-cap-gallery/Red-Mountain.png", label: "Red Mountain" },
          { src: "/images/products/headwear/baseball-cap-gallery/SC-BGRN.png", label: "SC BGRN" },
          { src: "/images/products/headwear/baseball-cap-gallery/SeaLinks-Golf-Country-Club.png", label: "SeaLinks Golf – Country Club" },
          { src: "/images/products/headwear/baseball-cap-gallery/Thu-Duc-Garden-Homes.png", label: "Thu Duc Garden Homes" },
          { src: "/images/products/headwear/baseball-cap-gallery/USS-Yorktown.png", label: "USS Yorktown" }
        ]
      },
      { id: "flat-brimmed-cap", name: "Flat Brimmed Cap", image: "/images/products/headwear/flat-brimmed-cap.png",
        gallery: [
          { src: "/images/products/headwear/flat-brimmed-cap-gallery/Bahrain-Victorious-Flat-Bill-Hat.png", label: "Bahrain Victorious" },
          { src: "/images/products/headwear/flat-brimmed-cap-gallery/Team-Ireland-Racing.png", label: "Team Ireland Racing" },
          { src: "/images/products/headwear/flat-brimmed-cap-gallery/Colorful-Flat-Bill-Hat.png", label: "Colorful Flat Bill Hat" }
        ]
      },
      { id: "running-cap", name: "Running Cap", image: "/images/products/headwear/running-cap.png",
        gallery: [
          { src: "/images/products/headwear/running-cap-gallery/Austin-Tri-Cyclist.png", label: "Austin Tri Cyclist" },
          { src: "/images/products/headwear/running-cap-gallery/Bike-Works.png", label: "Bike Works" },
          { src: "/images/products/headwear/running-cap-gallery/De-Soto-Triathlon.png", label: "De Soto Triathlon" },
          { src: "/images/products/headwear/running-cap-gallery/Edge-Athlete-Lounge-Side.png", label: "Edge Athlete Lounge Side" },
          { src: "/images/products/headwear/running-cap-gallery/Greg-Norman.png", label: "Greg Norman" },
          { src: "/images/products/headwear/running-cap-gallery/Home-Front.png", label: "Home Front" },
          { src: "/images/products/headwear/running-cap-gallery/Nathan.png", label: "Nathan" },
          { src: "/images/products/headwear/running-cap-gallery/New-York-City-Half.png", label: "New York City Half" },
          { src: "/images/products/headwear/running-cap-gallery/Porsche-Golf-Cup.png", label: "Porsche Golf Cup" },
          { src: "/images/products/headwear/running-cap-gallery/St-Augustine-Half-Marathon.png", label: "St Augustine Half Marathon" },
          { src: "/images/products/headwear/running-cap-gallery/St-Jude-Childrens-Research-Hospital.png", label: "St Jude Children’s Research Hospital" },
          { src: "/images/products/headwear/running-cap-gallery/Team-Ashworth-Kona.png", label: "Team Ashworth Kona" },
          { src: "/images/products/headwear/running-cap-gallery/VM-Clinic.png", label: "VM Clinic" },
          { src: "/images/products/headwear/running-cap-gallery/Fleet-Feet-Sports-2.png", label: "Fleet Feet Sports 2" }
        ]
      },
      { id: "cycling-cap", name: "Cycling Cap", image: "/images/products/headwear/cycling-cap.png",
        gallery: [
          { src: "/images/products/headwear/cycling-cap-gallery/Hogan-Lovells.png", label: "Hogan Lovells" }
        ]
      },
      { id: "visor", name: "Visor", image: "/images/products/headwear/visor.png",
        gallery: [
          { src: "/images/products/headwear/visor-gallery/Danang-Golf-Club12.png", label: "Danang Golf Club12" },
          { src: "/images/products/headwear/visor-gallery/Dukes-Beach-House.png", label: "Duke’s Beach House" },
          { src: "/images/products/headwear/visor-gallery/Gulf-Coast-Triathlon.png", label: "Gulf Coast Triathlon" },
          { src: "/images/products/headwear/visor-gallery/Ragnar-Trail-Visor.png", label: "Ragnar Trail" },
          { src: "/images/products/headwear/visor-gallery/T3-Triathlon.png", label: "T3 Triathlon" },
          { src: "/images/products/headwear/visor-gallery/The-Bluffs-Visor.png", label: "The Bluffs" },
          { src: "/images/products/headwear/visor-gallery/VMM-Visor.png", label: "VMM" },
          { src: "/images/products/headwear/visor-gallery/Pink-Visor.png", label: "Pink Visor" },
          { src: "/images/products/headwear/visor-gallery/HUUB.png", label: "HUUB" },
          { src: "/images/products/headwear/visor-gallery/Base.png", label: "Base" },
          { src: "/images/products/headwear/visor-gallery/Fort-Lauderdale.png", label: "Fort Lauderdale" },
          { src: "/images/products/headwear/visor-gallery/ATKINSON.png", label: "ATKINSON" }
        ]
      },
      { id: "beanie", name: "Beanie", image: "/images/products/headwear/beanie.png",
        gallery: [
          { src: "/images/products/headwear/beanie-gallery/Polyknit-Light-Hat-Unisex.png", label: "Polyknit Light Hat Unisex" },
          { src: "/images/products/headwear/beanie-gallery/Cycling-Skull-Cap.png", label: "Cycling Skull Cap" },
          { src: "/images/products/headwear/beanie-gallery/Hat-Polyknit.png", label: "Hat Polyknit" },
          { src: "/images/products/headwear/beanie-gallery/Reversible-Knit-Beanie.png", label: "Reversible Knit Beanie" },
          { src: "/images/products/headwear/beanie-gallery/Super-Duty-Sublimated-Mid-Cap-bikes.png", label: "Super Duty Sublimated Mid Cap-bikes" }
        ]
      }
    ]
  },
  {
    id: "mens-and-womens-wear",
    name: "Men's & Women's Wear",
    description: "High-quality corporate apparel, activewear, and casual wear for men and women.",
    image: "/images/products/corporate-hero.png",
    pdfBrochure: "/documents/Corporate_Logoed_Apparel.pdf",
    subcategories: [
      { id: "poloshirt", name: "Polo Shirt", image: "/images/products/mens-womens/poloshirt.png",
        gallery: [
          { src: "/images/products/mens-womens/poloshirt-gallery/Maserati.png", label: "Maserati" },
          { src: "/images/products/mens-womens/poloshirt-gallery/Polo.png", label: "Polo" },
          { src: "/images/products/mens-womens/poloshirt-gallery/Porsche.png", label: "Porsche" },
          { src: "/images/products/mens-womens/poloshirt-gallery/Straye.png", label: "Straye" },
          { src: "/images/products/mens-womens/poloshirt-gallery/Gray-Jacket-1.png", label: "Long Sleeveless" }
        ]
      },
      { id: "full-button-down-shirt", name: "Full Button Down Shirt", image: "/images/products/mens-womens/full-button-down-shirt.png",
        gallery: [
          { src: "/images/products/mens-womens/full-button-down-shirt-gallery/Porsche-1.png", label: "Porsche" },
          { src: "/images/products/mens-womens/full-button-down-shirt-gallery/Maserati-1.png", label: "Maserati" }
        ]
      },
      { id: "t-shirt", name: "T-Shirt", image: "/images/products/mens-womens/t-shirt.png",
        gallery: [
          { src: "/images/products/mens-womens/t-shirt-gallery/Bahrain-Blue.png", label: "Bahrain Blue" },
          { src: "/images/products/mens-womens/t-shirt-gallery/Bahrain-Red.png", label: "Bahrain Red" },
          { src: "/images/products/mens-womens/t-shirt-gallery/Bahrain-White.png", label: "Bahrain White" },
          { src: "/images/products/mens-womens/t-shirt-gallery/Hard-Rock-Freedom.png", label: "Hard Rock Freedom" },
          { src: "/images/products/mens-womens/t-shirt-gallery/Hard-Rock-Rebel-Rock.png", label: "Hard Rock Rebel Rock" },
          { src: "/images/products/mens-womens/t-shirt-gallery/Bahrain-Blue-With-Stripe.png", label: "Bahrain Blue With Stripe" }
        ]
      },
      { id: "jacket", name: "Jacket", image: "/images/products/mens-womens/jacket.png",
        gallery: [
          { src: "/images/products/mens-womens/jacket-gallery/Bahrain-Women-Jacket.png", label: "Bahrain Women Jacket" },
          { src: "/images/products/mens-womens/jacket-gallery/Bahrain-Men-Jacket.png", label: "Bahrain Men Jacket" },
          { src: "/images/products/mens-womens/jacket-gallery/Porsche-Jacket.png", label: "Porsche Jacket" },
          { src: "/images/products/mens-womens/jacket-gallery/Straye-1.png", label: "Straye" },
          { src: "/images/products/mens-womens/jacket-gallery/Team-Ireland.png", label: "Team Ireland" }
        ]
      },
      { id: "half-zip", name: "Half Zip", image: "/images/products/mens-womens/half-zip.png",
        gallery: [
          { src: "/images/products/mens-womens/half-zip-gallery/Gray-Jacket.png", label: "Gray Half Zip" }
        ]
      },
      { id: "pants", name: "Pants", image: "/images/products/mens-womens/pants.png",
        gallery: [
          { src: "/images/products/mens-womens/pants-gallery/Women-Pattern-Pant.png", label: "Women Pattern Pant" },
          { src: "/images/products/mens-womens/pants-gallery/Green-Pant.png", label: "Green Pant" },
          { src: "/images/products/mens-womens/pants-gallery/Blue-Pant.png", label: "Blue Pant" }
        ]
      },
      { id: "shorts", name: "Shorts", image: "/images/products/mens-womens/shorts.png",
        gallery: [
          { src: "/images/products/mens-womens/shorts-gallery/Short-1.png", label: "Short 1" },
          { src: "/images/products/mens-womens/shorts-gallery/Short-2.png", label: "Short 2" },
          { src: "/images/products/mens-womens/shorts-gallery/Short-3.png", label: "Short 3" },
          { src: "/images/products/mens-womens/shorts-gallery/Short-4.png", label: "Short 4" }
        ]
      },
      { id: "vest", name: "Vest", image: "/images/products/mens-womens/vest.png" }
    ]
  },
  {
    id: "golf-resort",
    name: "Golf / Resort",
    description: "Premium custom golf polos and resort apparel focusing on comfort and UV protection.",
    image: "/images/projects/2bu-brand.jpg",
    pdfBrochure: "/documents/Corporate_Logoed_Apparel.pdf",
    subcategories: [
      { id: "golf-shirt", name: "Golf Shirt", image: "/images/products/golf/golf-shirt.png",
        gallery: [
          { src: "/images/products/golf/golf-shirt-gallery/Hensel-Phelps-1.png", label: "Hensel Phelps #1" },
          { src: "/images/products/golf/golf-shirt-gallery/Phu-Quoc.png", label: "Phu Quoc" },
          { src: "/images/products/golf/golf-shirt-gallery/Hard-Rock-1.png", label: "Hard Rock #1" },
          { src: "/images/products/golf/golf-shirt-gallery/Hard-Rock-2.png", label: "Hard Rock #2" }
        ]
      },
      { id: "full-button-down-shirt", name: "Full Button Down", image: "/images/products/golf/full-button-down-shirt.png",
        gallery: [
          { src: "/images/products/golf/full-button-down-shirt-gallery/Pattern-Shirt.png", label: "Pattern Shirt" },
          { src: "/images/products/golf/full-button-down-shirt-gallery/Hensel-Phelps-3.png", label: "Hensel Phelps #3" },
          { src: "/images/products/golf/full-button-down-shirt-gallery/Four-Seasons.png", label: "Four Seasons" },
          { src: "/images/products/golf/full-button-down-shirt-gallery/Blue-Shirt.png", label: "Blue Shirt" },
          { src: "/images/products/golf/full-button-down-shirt-gallery/Hensel-Phelps-2.png", label: "Hensel Phelps #2" }
        ]
      },
      { id: "visor", name: "Visor", image: "/images/products/golf/visor.png",
        gallery: [
          { src: "/images/products/golf/visor-gallery/Pink-Visor.png", label: "Pink Visor" },
          { src: "/images/products/golf/visor-gallery/HUUB.png", label: "HUUB" },
          { src: "/images/products/golf/visor-gallery/Fort-Lauderdale.png", label: "Fort Lauderdale" },
          { src: "/images/products/golf/visor-gallery/Base.png", label: "Base" },
          { src: "/images/products/golf/visor-gallery/ATKINSON.png", label: "ATKINSON" },
          { src: "/images/products/golf/visor-gallery/Gulf-Coast-Triathlon.png", label: "Gulf Coast Triathlon" },
          { src: "/images/products/golf/visor-gallery/GORGE.png", label: "" },
          { src: "/images/products/golf/visor-gallery/Danang-Golf-Club12.png", label: "Danang Golf Club12" },
          { src: "/images/products/golf/visor-gallery/Dukes-Beach-House.png", label: "Duke’s Beach House" },
          { src: "/images/products/golf/visor-gallery/Every-Man-Jack-Visor.png", label: "" },
          { src: "/images/products/golf/visor-gallery/Ragnar-Trail-Visor.png", label: "Ragnar Trail" },
          { src: "/images/products/golf/visor-gallery/T3-Triathlon.png", label: "T3 Triathlon" },
          { src: "/images/products/golf/visor-gallery/Tea3-Golf-Team.png", label: "Tea3 Golf Team" },
          { src: "/images/products/golf/visor-gallery/VMM-Visor.png", label: "VMM" }
        ]
      },
                  { id: "trucker-cap", name: "Trucker Cap", image: "/images/products/golf/trucker-cap.png",
        gallery: [
          { src: "/images/products/golf/trucker-cap-gallery/Bravo.png", label: "Bravo" },
          { src: "/images/products/golf/trucker-cap-gallery/1st-Endurance.png", label: "1st Endurance" },
          { src: "/images/products/golf/trucker-cap-gallery/Bahrain-13.png", label: "Bahrain 13" },
          { src: "/images/products/golf/trucker-cap-gallery/Bar-Cliff-Team.png", label: "Bar Cliff Team" },
          { src: "/images/products/golf/trucker-cap-gallery/Base-Performance.png", label: "Base Performance" },
          { src: "/images/products/golf/trucker-cap-gallery/Betty-Design.png", label: "Betty Design" },
          { src: "/images/products/golf/trucker-cap-gallery/Bluejay.png", label: "Bluejay" },
          { src: "/images/products/golf/trucker-cap-gallery/Borah-Teamwear.png", label: "Borah Teamwear" },
          { src: "/images/products/golf/trucker-cap-gallery/Boca-Tri.png", label: "Boca Tri" },
          { src: "/images/products/golf/trucker-cap-gallery/Brazen-Racing.png", label: "Brazen Racing" },
          { src: "/images/products/golf/trucker-cap-gallery/Bravo-1.png", label: "" },
          { src: "/images/products/golf/trucker-cap-gallery/Colorado-Triathlon-Company.png", label: "Colorado Triathlon Company" },
          { src: "/images/products/golf/trucker-cap-gallery/Cerverio.png", label: "Dallas Ultra 13.1" },
          { src: "/images/products/golf/trucker-cap-gallery/Dallas-Ultra-13.1.png", label: "Dallas Ultra 13.1" },
          { src: "/images/products/golf/trucker-cap-gallery/Detroit.png", label: "Detroit" },
          { src: "/images/products/golf/trucker-cap-gallery/Every-Man-Jack.png", label: "Every Man Jack" },
          { src: "/images/products/golf/trucker-cap-gallery/Hard-Rock.png", label: "Hard Rock" },
          { src: "/images/products/golf/trucker-cap-gallery/HPT-Kona.png", label: "HPT Kona" },
          { src: "/images/products/golf/trucker-cap-gallery/Indian-lake-Trail-Run.png", label: "Indian lake Trail Run" },
          { src: "/images/products/golf/trucker-cap-gallery/Landers-Ford.png", label: "Landers Ford" },
          { src: "/images/products/golf/trucker-cap-gallery/Macca.png", label: "Macca" },
          { src: "/images/products/golf/trucker-cap-gallery/MaccaX.png", label: "MaccaX" },
          { src: "/images/products/golf/trucker-cap-gallery/Maple-Grove-Lifetime-Tri.png", label: "Maple Grove Lifetime Tri" }
        ]
      },
                        { id: "baseball-cap", name: "Baseball Cap", image: "/images/products/golf/baseball-cap.png",
        gallery: [
          { src: "/images/products/golf/baseball-cap-gallery/Steel-Standing.png", label: "Steel Standing" },
          { src: "/images/products/golf/baseball-cap-gallery/Bravo.png", label: "Bravo" },
          { src: "/images/products/golf/baseball-cap-gallery/Allen-Samuels.png", label: "Allen Samuels" },
          { src: "/images/products/golf/baseball-cap-gallery/AVGA-Side.png", label: "AVGA Side" },
          { src: "/images/products/golf/baseball-cap-gallery/Bahrain-Victorious.png", label: "Bahrain Victorious" },
          { src: "/images/products/golf/baseball-cap-gallery/Bahrain-Victorious-Phoenix.png", label: "Bahrain Victorious Phoenix" },
          { src: "/images/products/golf/baseball-cap-gallery/Base-Rochester.png", label: "Base Rochester" },
          { src: "/images/products/golf/baseball-cap-gallery/Boulder-Rugby.png", label: "Boulder Rugby" },
          { src: "/images/products/golf/baseball-cap-gallery/BVM-Pub-Grill.png", label: "BVM Pub – Grill" },
          { src: "/images/products/golf/baseball-cap-gallery/Diamond-Bakery.png", label: "Diamond Bakery" },
          { src: "/images/products/golf/baseball-cap-gallery/Far-Niente-Wines.png", label: "Far Niente Wines" },
          { src: "/images/products/golf/baseball-cap-gallery/Grant-Thorton-Golf-Tournament.png", label: "Grant Thorton Golf Tournament" },
          { src: "/images/products/golf/baseball-cap-gallery/Habitat-for-Humanity.png", label: "Habitat for Humanity" },
          { src: "/images/products/golf/baseball-cap-gallery/HCSTM.png", label: "HCSTM" },
          { src: "/images/products/golf/baseball-cap-gallery/HardRock-Cafe-Panama.png", label: "HardRock Cafe Panama" },
          { src: "/images/products/golf/baseball-cap-gallery/Mongormery-Link.png", label: "Mongormery Link" },
          { src: "/images/products/golf/baseball-cap-gallery/Phuoc-Son-Gold-Company.png", label: "Phuoc Son Gold Company" },
          { src: "/images/products/golf/baseball-cap-gallery/SC-BGRN.png", label: "SC BGRN" },
          { src: "/images/products/golf/baseball-cap-gallery/SeaLinks-Golf-Country-Club.png", label: "SeaLinks Golf – Country Club" },
          { src: "/images/products/golf/baseball-cap-gallery/The-Bluffs.png", label: "The Bluffs" },
          { src: "/images/products/golf/baseball-cap-gallery/The-Ocean-Villas.png", label: "The Ocean Villas" },
          { src: "/images/products/golf/baseball-cap-gallery/Thu-Duc-Garden-Homes.png", label: "Thu Duc Garden Homes" },
          { src: "/images/products/golf/baseball-cap-gallery/USS-Yorktown.png", label: "USS Yorktown" },
          { src: "/images/products/golf/baseball-cap-gallery/Hooters.png", label: "Hooters" },
          { src: "/images/products/golf/baseball-cap-gallery/Trang-An-Golf-Club.png", label: "Trang An Golf Club" },
          { src: "/images/products/golf/baseball-cap-gallery/The-Bluffs-Golf-Club-Ho-Tram.png", label: "The Bluffs Golf Club Ho Tram" },
          { src: "/images/products/golf/baseball-cap-gallery/Team-Ashworth-Kona.png", label: "Team Ashworth Kona" },
          { src: "/images/products/golf/baseball-cap-gallery/Tea3-Golf-Team.png", label: "Tea3 Golf Team" },
          { src: "/images/products/golf/baseball-cap-gallery/Sotifel.png", label: "Sotifel" },
          { src: "/images/products/golf/baseball-cap-gallery/Siam-Country-Club.png", label: "Siam Country Club" },
          { src: "/images/products/golf/baseball-cap-gallery/St-Augustine-Half-Marathon.png", label: "St Augustine Half Marathon" },
          { src: "/images/products/golf/baseball-cap-gallery/St-Jude-Childrens-Research-Hospital.png", label: "St Jude Children’s Research Hospital" },
          { src: "/images/products/golf/baseball-cap-gallery/Porsche-Golf-Cup.png", label: "Porsche Golf Cup" },
          { src: "/images/products/golf/baseball-cap-gallery/Phuket-Country-Club.png", label: "Phuket Country Club" },
          { src: "/images/products/golf/baseball-cap-gallery/Ocean-Dunes-Golf-Club.png", label: "Ocean Dunes Golf Club" },
          { src: "/images/products/golf/baseball-cap-gallery/Ko-Olina-Golf-Club.png", label: "Ko Olina Golf Club" },
          { src: "/images/products/golf/baseball-cap-gallery/Giant-International.png", label: "Giant International" },
          { src: "/images/products/golf/baseball-cap-gallery/Dominican-Golf-Cup.png", label: "Dominican Golf Cup" },
          { src: "/images/products/golf/baseball-cap-gallery/Danang-Golf-Club.png", label: "Danang Golf Club" },
          { src: "/images/products/golf/baseball-cap-gallery/Dalat-Palace-Golf-Club.png", label: "Dalat Palace Golf Club" },
          { src: "/images/products/golf/baseball-cap-gallery/Bilster-Berg-Drive-Resort.png", label: "Bilster Berg Drive Resort" }
        ]
      },
      { id: "laser-cut-cap", name: "Laser Cut Cap", image: "/images/products/golf/laser-cut-cap.png",
        gallery: [
          { src: "/images/products/golf/laser-cut-cap-gallery/Waialae-Country-Club.png", label: "Waialae Country Club" },
          { src: "/images/products/golf/laser-cut-cap-gallery/Waialae-Country-Club-1.png", label: "Waialae Country Club #1" },
          { src: "/images/products/golf/laser-cut-cap-gallery/Ko-Olina.png", label: "Ko Olina" }
        ]
      },
      { id: "bucket-hat", name: "Bucket Hat", image: "/images/products/golf/bucket-hat.png",
        gallery: [
          { src: "/images/products/golf/bucket-hat-gallery/Waialae-Country-Club-2.png", label: "Waialae Country Club" }
        ]
      },
      { id: "pants", name: "Pants", image: "/images/products/golf/pants.png",
        gallery: [
          { src: "/images/products/golf/pants-gallery/Women-Pattern-Pant.png", label: "Women Pattern Pant" },
          { src: "/images/products/golf/pants-gallery/Green-Pant.png", label: "Green Pant" },
          { src: "/images/products/golf/pants-gallery/Blue-Pant.png", label: "Blue Pant" }
        ]
      },
      { id: "shorts", name: "Shorts", image: "/images/products/golf/shorts.png",
        gallery: [
          { src: "/images/products/golf/shorts-gallery/Short-1.png", label: "Short 1" },
          { src: "/images/products/golf/shorts-gallery/Short-2.png", label: "Short 2" },
          { src: "/images/products/golf/shorts-gallery/Short-3.png", label: "Short 3" },
          { src: "/images/products/golf/shorts-gallery/Short-4.png", label: "Short 4" }
        ]
      },
      { id: "skorts", name: "Skorts", image: "/images/products/golf/skorts.png",
        gallery: [
          { src: "/images/products/golf/skorts-gallery/Style-1.png", label: "Style #1" },
          { src: "/images/products/golf/skorts-gallery/Style-2.png", label: "Style #2" },
          { src: "/images/products/golf/skorts-gallery/Style-3.png", label: "Style #3" }
        ]
      },
      { id: "golf-accessories", name: "Accessories", image: "/images/products/golf/golf-accessories.png",
        gallery: [
          { src: "/images/products/golf/golf-accessories-gallery/Caddie-BIB.png", label: "Caddie BIB" },
          { src: "/images/products/golf/golf-accessories-gallery/Sun-Sleeves.png", label: "Sun Sleeves" },
          { src: "/images/products/golf/golf-accessories-gallery/Buff.png", label: "Buff" },
          { src: "/images/products/golf/golf-accessories-gallery/Cover-Golf.png", label: "Cover Golf" }
        ]
      }
    ]
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getAllCategories(): Category[] {
  return categories;
}
