"use client"

import {useState} from 'react'
import RatingForm from "./rating-form"
import RatingDisplay from "./rating-display"

//Example data structure for a rating
interface Rating {
  id: string
  rating: number
  comment: string
  organizerName: String
  createdAt: String
}

export default function RatingSystem() {
  const [ratings, setRatings] = useState<Rating[]>([
    {
      id: "1",
      rating: 5,
      comment: "Excellent attention to detail and great commiunication the event planning process.",
      organizerName: "Mr. John Doe",
      createdAt: "2024-02-18",
    },
  ])

  const handleSubmitRating = (rating: number, comment: string) => {
    const newRating: Rating = {
      id: Date.now().toString(),
      rating,
      comment,
      organizerName: "Current Organizer",
      createdAt: new Date().toISOString,
    }
    
    setRatings((prev) => [newRating, ...prev])
  }

  return (
    <div className = "container mx-auto py-8 space-y-8">
      <RatingForm plannnerId = "example-planner-id" onSubmit = {handleSubmitRating}/>
      <RatingDisplay ratings = {ratings}/>
    </div>
  )
}