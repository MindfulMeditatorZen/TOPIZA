const countries = [
  {
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80',
    name: 'Nigeria',
    imageDescription: 'Wildlife roaming across a green African savanna',
  },
  {
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80',
    name: 'Ghana',
    imageDescription: 'Golden evening light over a West African landscape',
  },
  {
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1000&q=80',
    name: 'Kenya',
    imageDescription: 'Wide Kenyan savanna beneath a dramatic sky',
  },
  {
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1000&q=80',
    name: 'Egypt',
    imageDescription: 'Ancient pyramids rising from the desert',
  },
  {
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1000&q=80',
    name: 'Morocco',
    imageDescription: 'Colorful architecture in a Moroccan city',
  },
  {
    image: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=1000&q=80',
    name: 'South Africa',
    imageDescription: 'Mountain scenery overlooking Cape Town',
  },
  {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    name: 'Tanzania',
    imageDescription: 'A herd of elephants crossing the East African plains',
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    name: 'Uganda',
    imageDescription: 'Lush green wilderness in East Africa',
  },
  {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
    name: 'Rwanda',
    imageDescription: 'Rolling green hills in the heart of Africa',
  },
  {
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80',
    name: 'Senegal',
    imageDescription: 'Sunlit African grasslands stretching to the horizon',
  },
  {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
    name: 'Ethiopia',
    imageDescription: 'A rugged highland landscape in East Africa',
  },
  {
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80',
    name: 'Zambia',
    imageDescription: 'A quiet stretch of African wilderness',
  },
  {
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=80',
    name: 'Algeria',
    imageDescription: 'Vast desert dunes beneath a clear North African sky',
  },
  {
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
    name: 'Angola',
    imageDescription: 'A rugged mountain range at dusk',
  },
  {
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80',
    name: 'Botswana',
    imageDescription: 'Warm sunrise over an open natural landscape',
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80',
    name: 'Cameroon',
    imageDescription: 'Sunlight filtering through a dense tropical forest',
  },
  {
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=80',
    name: "Côte d'Ivoire",
    imageDescription: 'Wildlife standing in a leafy woodland',
  },
  {
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=80',
    name: 'Democratic Republic of the Congo',
    imageDescription: 'Lush tropical foliage in a rainforest',
  },
  {
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1000&q=80',
    name: 'Madagascar',
    imageDescription: 'Green countryside and rolling hills',
  },
  {
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1000&q=80',
    name: 'Malawi',
    imageDescription: 'A peaceful forest landscape with a winding trail',
  },
  {
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80',
    name: 'Mali',
    imageDescription: 'Water cascading down a rocky waterfall',
  },
  {
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=80',
    name: 'Mauritius',
    imageDescription: 'Blue ocean waves rolling toward the shore',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    name: 'Mozambique',
    imageDescription: 'A tropical beach with bright blue water',
  },
  {
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80',
    name: 'Namibia',
    imageDescription: 'A calm coastline beneath a softly colored sky',
  },
  {
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80',
    name: 'Niger',
    imageDescription: 'Wildflowers blooming in a sunlit field',
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    name: 'Sierra Leone',
    imageDescription: 'A mountain lake surrounded by green hills',
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
    name: 'Sudan',
    imageDescription: 'A misty mountain valley at first light',
  },
  {
    image: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1000&q=80',
    name: 'Togo',
    imageDescription: 'A scenic mountain landscape beneath drifting clouds',
  },
  {
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1000&q=80',
    name: 'Tunisia',
    imageDescription: 'Colorful flowers in a bright Mediterranean garden',
  },
  {
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1000&q=80',
    name: 'Zimbabwe',
    imageDescription: 'A dramatic mountain landscape under an open sky',
  },
]

export default countries
