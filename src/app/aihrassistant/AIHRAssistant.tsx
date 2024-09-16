import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Target, MessageSquare, Send, BarChart2, UserPlus, Smile } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { useTranslation } from 'react-i18next';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIHRAssistant() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'ai-chat'>('dashboard')
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [userInput, setUserInput] = useState('')

  const handleSendMessage = async () => {
    if (!userInput.trim()) return

    const newMessage: ChatMessage = { role: 'user', content: userInput }
    setChatMessages([...chatMessages, newMessage])
    setUserInput('')

    // Simulacija AI odgovora
    const aiResponse = await simulateAIResponse(userInput)
    setChatMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
  }

  const simulateAIResponse = async (input: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return `Evo podataka koje sam pronašao na osnovu vašeg upita "${input}": ...`
  }

  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-4">
        <h1 className="text-3xl font-bold">AI HR Asistent - Elektrodistribucija</h1>
        <p className="mt-2">Vaš pametni partner za upravljanje ljudskim resursima u energetskom sektoru</p>
      </div>
      
      <div className="flex-grow p-6">
        <Tabs 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value as "dashboard" | "ai-chat")} 
          className="space-y-4"
        >
          <TabsList className="flex justify-start overflow-x-auto pb-2">
            <TabsTrigger value="dashboard" className="px-4 py-2">
              <Brain className="mr-2 h-4 w-4" />
              AI HR Dashboard
            </TabsTrigger>
            <TabsTrigger value="ai-chat" className="px-4 py-2">
              <MessageSquare className="mr-2 h-4 w-4" />
              AI Asistent Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Card>
              <CardHeader>
                <CardTitle>AI HR Dashboard</CardTitle>
                <CardDescription>Napredne AI analize i preporuke za unapređenje HR procesa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                        Optimizacija smena
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>AI analiza sugeriše reorganizaciju smena za 20% manje prekovremenog rada i 15% veću efikasnost.</p>
                      <Button className="mt-4">Primeni novi raspored</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className="mr-2 h-5 w-5 text-red-500" />
                        Ciljani razvoj veština
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Fokus na veštine pametnih mreža i obnovljivih izvora energije u narednih 6 meseci.</p>
                      <Button className="mt-4">Kreiraj program obuke</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Smile className="mr-2 h-5 w-5 text-green-500" />
                        Analiza sentimenta
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Zadovoljstvo zaposlenih poraslo za 12% nakon uvođenja fleksibilnog radnog vremena.</p>
                      <Button className="mt-4">Detaljni izveštaj</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart2 className="mr-2 h-5 w-5 text-blue-500" />
                        Personalizacija iskustva
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>AI je identifikovao 5 ključnih grupa zaposlenih sa različitim potrebama za obukom.</p>
                      <Button className="mt-4">Prilagodi programe</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <UserPlus className="mr-2 h-5 w-5 text-purple-500" />
                        Optimizacija regrutacije
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>AI predikcija: 85% verovatnoća uspešnosti za top 3 kandidata za poziciju inženjera.</p>
                      <Button className="mt-4">Pregled kandidata</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-chat">
            <Card>
              <CardHeader>
                <CardTitle>AI Asistent Chat</CardTitle>
                <CardDescription>Razgovarajte sa AI asistentom i dobijte informacije iz baze podataka</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 overflow-y-auto mb-4 p-4 border rounded-lg">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        {msg.content}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Postavite pitanje AI asistentu..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-grow mr-2"
                  />
                  <Button onClick={handleSendMessage} aria-label={t('Pošalji poruku')}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
