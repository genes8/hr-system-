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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { AlertCircle, BarChart2, BookOpen, CheckSquare, FileText, PlusCircle, Send, Settings, Users } from 'lucide-react'

export default function Onboarding() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const newEmployees = [
    { id: 1, name: "Ana Petrović", position: "Software Developer", startDate: "2023-07-01", progress: 75 },
    { id: 2, name: "Marko Jovanović", position: "HR Specialist", startDate: "2023-07-15", progress: 40 },
    { id: 3, name: "Jelena Nikolić", position: "Project Manager", startDate: "2023-08-01", progress: 10 },
  ]

  const onboardingTasks = [
    { id: 1, task: "Popuniti dokumentaciju", completed: true },
    { id: 2, task: "Proći bezbednosnu obuku", completed: true },
    { id: 3, task: "Upoznati se sa timom", completed: false },
    { id: 4, task: "Postaviti radnu stanicu", completed: false },
    { id: 5, task: "Pregledati priručnik za zaposlene", completed: false },
  ]

  const resources = [
    { id: 1, title: "Priručnik za zaposlene", type: "PDF" },
    { id: 2, title: "Organizaciona struktura", type: "PNG" },
    { id: 3, title: "Video dobrodošlice", type: "MP4" },
    { id: 4, title: "IT politike i procedure", type: "PDF" },
    { id: 5, title: "Benefiti zaposlenih", type: "PDF" },
  ]

  const analyticsData = [
    { name: 'Nedelja 1', completionRate: 85 },
    { name: 'Nedelja 2', completionRate: 70 },
    { name: 'Nedelja 3', completionRate: 95 },
    { name: 'Nedelja 4', completionRate: 80 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Onboarding platforma</h1>
      </header>

      <main className="flex-grow p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">
              <BarChart2 className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="novi-zaposleni">
              <Users className="w-4 h-4 mr-2" />
              Novi zaposleni
            </TabsTrigger>
            <TabsTrigger value="zadaci">
              <CheckSquare className="w-4 h-4 mr-2" />
              Zadaci
            </TabsTrigger>
            <TabsTrigger value="resursi">
              <BookOpen className="w-4 h-4 mr-2" />
              Resursi
            </TabsTrigger>
            <TabsTrigger value="mentorstvo">
              <Users className="w-4 h-4 mr-2" />
              Mentorstvo
            </TabsTrigger>
            <TabsTrigger value="analitika">
              <BarChart2 className="w-4 h-4 mr-2" />
              Analitika
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Card>
              <CardHeader>
                <CardTitle>Onboarding Dashboard</CardTitle>
                <CardDescription>Pregled trenutnog stanja onboarding procesa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Novi zaposleni ovog meseca</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5</div>
                      <p className="text-xs text-muted-foreground">+2 u odnosu na prošli mesec</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Prosečno vreme onboardinga</CardTitle>
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">14 dana</div>
                      <p className="text-xs text-muted-foreground">-2 dana u odnosu na prošli mesec</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Stopa završetka zadataka</CardTitle>
                      <CheckSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">92%</div>
                      <p className="text-xs text-muted-foreground">+5% u odnosu na prošli mesec</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Napredak novih zaposlenih</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ime</TableHead>
                        <TableHead>Pozicija</TableHead>
                        <TableHead>Datum početka</TableHead>
                        <TableHead>Napredak</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {newEmployees.map((employee) => (
                        <TableRow key={employee.id}>
                          <TableCell className="font-medium">{employee.name}</TableCell>
                          <TableCell>{employee.position}</TableCell>
                          <TableCell>{employee.startDate}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Progress value={employee.progress} className="w-[60px] mr-2" />
                              <span>{employee.progress}%</span>
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

          <TabsContent value="novi-zaposleni">
            <Card>
              <CardHeader>
                <CardTitle>Novi zaposleni</CardTitle>
                <CardDescription>Upravljajte onboarding procesom za nove zaposlene</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Pretraži zaposlene..." className="max-w-sm" />
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Dodaj novog zaposlenog
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ime</TableHead>
                        <TableHead>Pozicija</TableHead>
                        <TableHead>Datum početka</TableHead>
                        <TableHead>Napredak</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {newEmployees.map((employee) => (
                        <TableRow key={employee.id}>
                          <TableCell className="font-medium">{employee.name}</TableCell>
                          <TableCell>{employee.position}</TableCell>
                          <TableCell>{employee.startDate}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Progress value={employee.progress} className="w-[60px] mr-2" />
                              <span>{employee.progress}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Detalji</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="zadaci">
            <Card>
              <CardHeader>
                <CardTitle>Onboarding zadaci</CardTitle>
                <CardDescription>Upravljajte i pratite onboarding zadatke</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Select>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Izaberi zaposlenog" />
                      </SelectTrigger>
                      <SelectContent>
                        {newEmployees.map((employee) => (
                          <SelectItem key={employee.id} value={employee.id.toString()}>
                            {employee.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Dodaj zadatak
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Zadatak</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {onboardingTasks.map((task) => (
                        <TableRow key={task.id}>
                          <TableCell className="font-medium">{task.task}</TableCell>
                          <TableCell>
                            <Badge variant={task.completed ? "default" : "secondary"}>
                              {task.completed ? "Završeno" : "U toku"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              {task.completed ? "Poništi" : "Označi kao završeno"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resursi">
            <Card>
              <CardHeader>
                <CardTitle>Biblioteka resursa</CardTitle>
                <CardDescription>Pristupite svim relevantnim dokumentima i informacijama</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Input placeholder="Pretraži resurse..." className="max-w-sm" />
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Dodaj novi resurs
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Naziv</TableHead>
                        <TableHead>Tip</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {resources.map((resource) => (
                        <TableRow key={resource.id}>
                          <TableCell className="font-medium">{resource.title}</TableCell>
                          <TableCell>{resource.type}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Preuzmi</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentorstvo">
            <Card>
              <CardHeader>
                <CardTitle>Program mentorstva</CardTitle>
                <CardDescription>Upravljajte mentorskim odnosima i pratite napredak</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Aktivna mentorstva</h3>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Dodeli mentora
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Novi zaposleni</TableHead>
                        <TableHead>Mentor</TableHead>
                        <TableHead>Datum početka</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Akcije</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Ana Petrović</TableCell>
                        <TableCell>Nikola Đorđević</TableCell>
                        <TableCell>2023-07-01</TableCell>
                        <TableCell>
                          <Badge>Aktivno</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">Detalji</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Marko Jovanović</TableCell>
                        <TableCell>Jovana Simić</TableCell>
                        <TableCell>2023-07-15</TableCell>
                        <TableCell>
                          <Badge>Aktivno</Badge>
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

          <TabsContent value="analitika">
            <Card>
              <CardHeader>
                <CardTitle>Analitika onboarding procesa</CardTitle>
                <CardDescription>Pratite efikasnost i identifikujte područja za poboljšanje</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Stopa završetka po nedeljama</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <BarChart data={analyticsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="completionRate" fill="#8884d8" name="Stopa završetka (%)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Ključni indikatori performansi (KPI)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Prosečno vreme do produktivnosti:</span>
                            <span className="font-bold">21 dan</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Stopa zadržavanja nakon 6 meseci:</span>
                            <span className="font-bold">95%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Zadovoljstvo novim zaposlenima:</span>
                            <span className="font-bold">4.8/5</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Preporuke za poboljšanje</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Skratiti vreme potrebno za postavljanje radne stanice</li>
                        <li>Poboljšati kvalitet materijala za obuku o bezbednosti</li>
                        <li>Uvesti više interaktivnih sesija za upoznavanje sa timom</li>
                        <li>Implementirati sistem gamifikacije za onboarding zadatke</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}