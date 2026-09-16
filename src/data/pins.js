// src/data/pins.js
// Mock data for Pinterest redesign prototype.
// Each pin includes fields required by UI components.

export const pins = Array.from({ length: 30 }, (_, i) => {
  const id = `pin-${i + 1}`;
  const categories = ['FASHION', 'ART', 'ARCHITECTURE', 'TECHNOLOGY'];
  const category = categories[i % categories.length];
  const creators = ['Ava', 'Liam', 'Noah', 'Emma', 'Olivia', 'Ethan'];
  const creator = creators[i % creators.length];
  const tags = ['CYBERPUNK', 'NEON', 'FUTURISTIC', 'DIGITAL', 'GLASS', 'WALKABLE'];
  const moods = ['DARK', 'PEACEFUL', 'ENERGETIC'];
  const colors = ['#00ffff', '#ff00ff', '#b400ff'];

  const dna = {
    style: category === 'FASHION' ? 'CYBERPUNK' : 'MINIMAL',
    mood: moods[i % moods.length],
    colors: [colors[i % colors.length]],
    elements: ['NEON', 'ARCHITECTURE', 'ROBOTS'][i % 3],
    composition: i % 2 === 0 ? 'GEOMETRIC' : 'ASYMMETRIC',
    material: i % 2 === 0 ? 'METAL' : 'GLASS',
  };

  return {
    id,
    title: `${category} Inspiration ${i + 1}`,
    image: `https://picsum.photos/seed/${id}/400/300`,
    creator,
    category,
    tags: tags.slice(0, 3),
    mood: dna.mood,
    colors: dna.colors,
    style: dna.style,
    dna,
  };
});
