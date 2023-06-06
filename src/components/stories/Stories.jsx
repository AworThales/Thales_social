import React from './stories.scss'

const Stories = () => {

    // Dummy data
    const stories = [
        {
            id: 1,
            name: "Thales Awor",
            img: "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 2,
            name: "Thales Solomon",
            img: "https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 3,
            name: "Awor Thales",
            img: "https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
          {
            id: 4,
            name: "Solomon Awor",
            img: "https://images.pexels.com/photos/7608079/pexels-photo-7608079.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          },
    ]

  return (
    <div className='stories'>
      {stories.map(story =>{
        <div className="story">
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
      })}
    </div>
  )
}

export default Stories
