export interface IEnchantmentCommandObject {
	Enchantments: IEnchantmentDescriptor[];
}

export interface IEnchantmentDescriptor {
	id: EnchantmentIds;
	lvl: number;
}

export type EnchantmentIds = "aqua_affinity" |
	"bane_of_arthropods" |
	"binding_curse" |
	"blast_protection" |
	"channeling" |
	"depth_strider" |
	"efficiency" |
	"feather_falling" |
	"fire_aspect" |
	"fire_protection" |
	"flame" |
	"fortune" |
	"frost_walker" |
	"impaling" |
	"infinity" |
	"knockback" |
	"looting" |
	"loyalty" |
	"luck_of_the_sea" |
	"lure" |
	"mending" |
	"multishot" |
	"piercing" |
	"power" |
	"projectile_protection" |
	"protection" |
	"punch" |
	"quick_charge" |
	"respiration" |
	"riptide" |
	"sharpness" |
	"silk_touch" |
	"smite" |
	"soul_speed" |
	"sweeping" |
	"thorns" |
	"unbreaking" |
	"vanishing_curse";

export const EnchantmentIdArray: EnchantmentIds[] = [
	"aqua_affinity",
	"bane_of_arthropods",
	"binding_curse",
	"blast_protection",
	"channeling",
	"depth_strider",
	"efficiency",
	"feather_falling",
	"fire_aspect",
	"fire_protection",
	"flame",
	"fortune",
	"frost_walker",
	"impaling",
	"infinity",
	"knockback",
	"looting",
	"loyalty",
	"luck_of_the_sea",
	"lure",
	"mending",
	"multishot",
	"piercing",
	"power",
	"projectile_protection",
	"protection",
	"punch",
	"quick_charge",
	"respiration",
	"riptide",
	"sharpness",
	"silk_touch",
	"smite",
	"soul_speed",
	"sweeping",
	"thorns",
	"unbreaking",
	"vanishing_curse"
];

export const EnchantmentMaxLevel = {
	"aqua_affinity": 1,
	"bane_of_arthropods": 5,
	"binding_curse": 1, // curse of binding
	"blast_protection": 4,
	"channeling": 1,
	"depth_strider": 3,
	"efficiency": 5,
	"feather_falling": 4,
	"fire_aspect": 2,
	"fire_protection": 4,
	"flame": 1,
	"fortune": 3,
	"frost_walker": 2,
	"impaling": 5,
	"infinity": 1,
	"knockback": 2,
	"looting": 3,
	"loyalty": 3,
	"luck_of_the_sea": 3,
	"lure": 3,
	"mending": 1,
	"multishot": 1,
	"piercing": 4,
	"power": 5,
	"projectile_protection": 4,
	"protection": 4,
	"punch": 2,
	"quick_charge": 3,
	"respiration": 3,
	"riptide": 3,
	"sharpness": 5,
	"silk_touch": 1,
	"smite": 5,
	"soul_speed": 3,
	"sweeping": 3,
	"thorns": 3,
	"unbreaking": 3,
	"vanishing_curse": 1 // curse of vanishing
};

export const EnchantmentNames: { [key: string]: string } = {
	"aqua_affinity": "Aqua Affinity",
	"bane_of_arthropods": "Bane of Arthropods",
	"binding_curse": "Curse of Binding",
	"blast_protection": "Blast Protection",
	"channeling": "Channeling",
	"depth_strider": "Depth Strider",
	"efficiency": "Efficiency",
	"feather_falling": "Feather Falling",
	"fire_aspect": "Fire Aspect",
	"fire_protection": "Fire Protection",
	"flame": "Flame",
	"fortune": "Fortune",
	"frost_walker": "Frost Walker",
	"impaling": "Impaling",
	"infinity": "Infinity",
	"knockback": "Knockback",
	"looting": "Looting",
	"loyalty": "Loyalty",
	"luck_of_the_sea": "Luck of the Sea",
	"lure": "Lure",
	"mending": "Mending",
	"multishot": "Multishot",
	"piercing": "Piercing",
	"power": "Power",
	"projectile_protection": "Projectile Protection",
	"protection": "Protection",
	"punch": "Punch",
	"quick_charge": "Quick Charge",
	"respiration": "Respiration",
	"riptide": "Riptide",
	"sharpness": "Sharpness",
	"silk_touch": "Silk Touch",
	"smite": "Smite",
	"soul_speed": "Soul Speed",
	"sweeping": "Sweeping Edge",
	"thorns": "Thorns",
	"unbreaking": "Unbreaking",
	"vanishing_curse": "Curse of Vanishing"
};