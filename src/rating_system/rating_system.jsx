"use client"

import {useState} from 'react'
import RatingForm from "./rating-form"
import RatingDisplay from "./rating-display"

export default function RatingSystem() {
  const [ratings, setRatings] = useState<Rating[]>([
    {
      id: "1",
      rating: 5,
      comment: "Excellent attention to detail and great commiunication the event planning process.",
      organizerName: "Mr. John Doe",
      createdAt: "2024-02-18",
    },

    {
      id: "2",
      rating: 4,
      comment: "Very professional and responsive. The corporate event was well-executed, though there were minor timing issues.",
      organizerName: "Sarah Johnson",
      createdAt: "2024-02-10T15:30:00Z"
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
      <RatingForm 
      plannnerId = "example-planner-id" 
      onSubmit = {handleSubmitRating}
      />
      <RatingDisplay ratings = {ratings}/>
    </div>
  )
}