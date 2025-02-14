import {Star} from 'lucide-react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import{ScrollArea} from "@components/ui/scroll-area"

export default function RatingDisplay({ ratings }) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {ratings.map((rating) => (
                <Card key={rating.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`w-4 h-4 ${
                              index < rating.rating
                                ? "fill-yellow-400 stroke-yellow-400"
                                : "stroke-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(rating.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">{rating.organizerName}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{rating.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    )
  }