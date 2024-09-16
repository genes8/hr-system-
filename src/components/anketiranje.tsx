'use client'

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, PieChart, LineChart, Line, Bar, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertCircle, BarChart2, FileText, PlusCircle, Send, Settings, Trash2, TrendingUp, Users } from 'lucide-react'

export function Anketiranje() {
  const [activeTab, setActiveTab] = useState('kreiranje')

  const sampleSurveys = [
    { id: 1, name: "Zadovoljstvo zaposlenih 2023", status: "Aktivna", responses: 145, completion: 72 },
    { id: 2, name: "Procena obuke: Liderstvo 101", status: "Završena", responses: 30, completion: 100 },
    { id: 3, name: "360° Feedback za menadžere", status: "U pripremi", responses: 0, completion: 0 },
    { id: 4, name: "Organizaciona kultura", status: "Aktivna", responses: 89, completion: 45 },
  ]

  const sampleResults = [
    { question: "Zadovoljstvo poslom", average: 4.2, responses: 145 },
    { question: "Balans posao-život", average: 3.8, responses: 145 },
    { question: "Odnos sa nadređenim", average: 4.5, responses: 145 },
    { question: "Mogućnosti za napredovanje", average: 3.5, responses: 145 },
  ]

  const trendData = [
    { month: 'Jan', zadovoljstvo: 3.8, angazovanost: 3.5 },
    { month: 'Feb', zadovoljstvo: 3.9, angazovanost: 3.6 },
    { month: 'Mar', zadovoljstvo: 4.0, angazovanost: 3.8 },
    { month: 'Apr', zadovoljstvo: 4.1, angazovanost: 3.9 },
    { month: 'Maj', zadovoljstvo: 4.2, angazovanost: 4.0 },
    { month: 'Jun', zadovoljstvo: 4.3, angazovanost: 4.1 },
  ]

  const sentimentData = [
    { name: 'Pozitivan', value: 60 },
    { name: 'Neutralan', value: 30 },
    { name: 'Negativan', value: 10 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Sistem za anketiranje</h1>
      </header>

      <main className="flex-grow p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="kreiranje">
              <PlusCircle className="w-4 h-4 mr-2" />
              Kreiranje ankete
            </TabsTrigger>
            <TabsTrigger value="pregled">
              <FileText className="w-4 h-4 mr-2" />
              Pregled anketa
            </TabsTrigger>
            <TabsTrigger value="rezultati">
              <BarChart2 className="w-4 h-4 mr-2" />
              Rezultati i analiza
            </TabsTrigger>
            <TabsTrigger value="akcioni-planovi">
              <TrendingUp className="w-4 h-4 mr-2" />
              Akcioni planovi
            </TabsTrigger>
            <TabsTrigger value="podesavanja">
              <Settings className="w-4 h-4 mr-2" />
              Podešavanja
            </TabsTrigger>
          </TabsList>

          <TabsContent value="kreiranje">
            <Card>
              <CardHeader>
                <CardTitle>Kreiranje nove ankete</CardTitle>
                <CardDescription>Dizajnirajte novu anketu za prikupljanje povratnih informacija</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="survey-name" className="text-sm font-medium">Naziv ankete</label>
                    <Input id="survey-name" placeholder="Unesite naziv ankete" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="survey-description" className="text-sm font-medium">Opis ankete</label>
                    <Textarea id="survey-description" placeholder="Unesite opis i svrhu ankete" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tip ankete</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Izaberite tip ankete" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zadovoljstvo">Zadovoljstvo zaposlenih</SelectItem>
                        <SelectItem value="obuka">Procena obuke</SelectItem>
                        <SelectItem value="360">360° Feedback</SelectItem>
                        <SelectItem value="kultura">Organizaciona kultura</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Opcije ankete</label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" />
                      <label htmlFor="anonymous" className="text-sm font-medium">
                        Anonimna anketa
                      </label>
                    </div>
                  </div>
                  <Button>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Dodaj pitanje
                  </Button>
                  <div className="pt-4">
                    <Button className="w-full">Kreiraj anketu</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pregled">
            <Card>
              <CardHeader>
                <CardTitle>Pregled anketa</CardTitle>
                <CardDescription>Upravljajte postojećim anketama i pratite njihov status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Naziv ankete</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Broj odgovora</TableHead>
                        <TableHead>Stopa završetka</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sampleSurveys.map((survey) => (
                        <TableRow key={survey.id}>
                          <TableCell className="font-medium">{survey.name}</TableCell>
                          <TableCell>
                            <Badge variant={survey.status === 'Aktivna' ? 'default' : survey.status === 'Završena' ? 'secondary' : 'outline'}>
                              {survey.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{survey.responses}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Progress value={survey.completion} className="w-[60px] mr-2" />
                              <span className="text-sm">{survey.completion}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <FileText className="w-4 h-4 mr-2" />
                                Pregled
                              </Button>
                              <Button variant="outline" size="sm">
                                <Send className="w-4 h-4 mr-2" />
                                Pošalji
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Obriši
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rezultati">
            <Card>
              <CardHeader>
                <CardTitle>Rezultati i analiza</CardTitle>
                <CardDescription>Pregledajte rezultate anketa i analizirajte trendove</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Prosečne ocene po pitanjima</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={sampleResults}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="question" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="average" fill="#8884d8" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Trendovi zadovoljstva i angažovanosti</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={trendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="zadovoljstvo" stroke="#8884d8" />
                          <Line type="monotone" dataKey="angazovanost" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Sentiment analiza</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={sentimentData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {sentimentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Predikcija otkaza zaposlenih</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Rizik od otkaza (prosek):</span>
                          <span className="font-bold text-red-500">15%</span>
                        </div>
                        <Progress value={15} className="w-full" />
                        <p className="text-sm text-gray-500">
                          Bazirano na analizi zadovoljstva, performansi i drugih faktora, procenjeni rizik od otkaza za celu organizaciju je 15%.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="akcioni-planovi">
            <Card>
              <CardHeader>
                <CardTitle>Akcioni planovi</CardTitle>
                <CardDescription>Kreirajte i pratite akcione planove bazirane na rezultatima anketa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Aktivni akcioni planovi</h3>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Novi akcioni plan
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Naziv plana</TableHead>
                        <TableHead>Odgovorna osoba</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Progres</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Unapređenje interne komunikacije</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="w-6 h-6 mr-2">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                              <AvatarFallback>MJ</AvatarFallback>
                            </Avatar>
                            Marko Jovanović
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge>U toku</Badge>
                        </TableCell>
                        <TableCell>
                          <Progress value={60} className="w-[60px]" />
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Detalji</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Poboljšanje work-life balansa</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Avatar className="w-6 h-6 mr-2">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                              <AvatarFallback>AP</AvatarFallback>
                            </Avatar>
                            Ana Petrović
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">Planiran</Badge>
                        </TableCell>
                        <TableCell>
                          <Progress value={0} className="w-[60px]" />
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Detalji</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="podesavanja">
            <Card>
              <CardHeader>
                <CardTitle>Podešavanja sistema za anketiranje</CardTitle>
                <CardDescription>Prilagodite sistem prema potrebama vaše organizacije</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Brendiranje anketa</label>
                    <div className="flex items-center space-x-2">
                      <Input type="file" accept="image/*" />
                      <Button variant="outline">Otpremi logo</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Podrazumevane opcije anketa</label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="default-anonymous" />
                      <label htmlFor="default-anonymous" className="text-sm">
                        Anonimne ankete kao podrazumevana opcija
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Integracije</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Izaberite sistem za integraciju" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="performance">Sistem za upravljanje performansama</SelectItem>
                        <SelectItem value="lms">Sistem za upravljanje obukama (LMS)</SelectItem>
                        <SelectItem value="hris">HRIS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notifikacije</label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="email-notifications" />
                      <label htmlFor="email-notifications" className="text-sm">
                        Omogući email notifikacije za nove ankete
                      </label>
                    </div>
                  </div>
                  <Button>Sačuvaj podešavanja</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}