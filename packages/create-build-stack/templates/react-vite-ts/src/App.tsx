import { Button, Card } from '@build-stack/react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto">
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to {{PROJECT_TITLE}}
          </h1>
          <p className="text-gray-600 mb-6">
            Your new Build Stack project with Material Design 3 components is ready!
          </p>
          <Button variant="filled" className="w-full">
            Get Started
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default App