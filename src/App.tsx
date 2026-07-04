import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <Card className="max-w-xl w-full">
        <CardContent className="p-8 text-center space-y-5">
          <Badge variant="secondary">Portfolio Website</Badge>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Ammar Alsaedi
            </h1>
            <p className="text-muted-foreground">
              Full-Stack Developer | AI Enthusiast | Computer Science Graduate
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <Button>View Projects</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default App