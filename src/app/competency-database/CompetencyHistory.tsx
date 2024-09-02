"use client";

import { useState } from 'react'
import { Search, ChevronDown, ChevronUp, Calendar, Award, Book, TrendingUp } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  avatar: string;
}

interface CompetencyHistoryItem {
  id: number;
  employeeId: number;
  competency: string;
  date: string;
  type: string;
  details: string;
  score: number;
}

interface CompetencyLevel {
  competency: string;
  level: number;
}

export default function CompetencyHistory() {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [timeRange, setTimeRange] = useState('1y')

  const employees: Employee[] = [
    { id: 1, name: "Ana Petrović", position: "Inženjer elektroenergetike", department: "Distribucija", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%202-gSN7PvwteaPSJD5vgamH5zywzrkGgx.webp" },
    { id: 2, name: "Marko Nikolić", position: "Tehničar za održavanje", department: "Proizvodnja", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Man%20pic-dTKrDztZd2ogCdfQRhNJd3CE42fOYQ.webp" },
    { id: 3, name: "Jovana Đorđević", position: "Analitičar za energetsku efikasnost", department: "Razvoj", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%201-QeeaTOnPFd3iHJGPqO7hdRRS390mI9.webp" },
    { id: 4, name: "Nikola Jovanović", position: "Menadžer projekata", department: "Upravljanje", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man%20pic%202-0kz43JiIZOEkZq3cQTrKGQsRfwOZ4K.webp" },
    { id: 5, name: "Milica Stojanović", position: "Pravni savetnik", department: "Finansije", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%203-cmIfb2M5ettI5cGYKxaQbfpoqyTTYG.webp" },
  ]

  const competencyHistory: CompetencyHistoryItem[] = [
    { id: 1, employeeId: 1, competency: "Upravljanje elektroenergetskim sistemima", date: "2023-01-15", type: "Obuka", details: "Napredni kurs upravljanja elektroenergetskim sistemima", score: 85 },
    { id: 2, employeeId: 1, competency: "Analiza podataka u energetici", date: "2023-03-20", type: "Sertifikacija", details: "IBM Data Analysis Professional Certificate", score: 92 },
    { id: 3, employeeId: 1, competency: "Energetska efikasnost", date: "2023-06-10", type: "Projekat", details: "Implementacija sistema za praćenje energetske efikasnosti", score: 88 },
    { id: 4, employeeId: 1, competency: "Upravljanje elektroenergetskim sistemima", date: "2023-09-05", type: "Ocena", details: "Godišnja procena veština", score: 90 },
    { id: 5, employeeId: 1, competency: "Analiza podataka u energetici", date: "2023-11-30", type: "Projekat", details: "Analiza podataka o potrošnji električne energije", score: 95 },
  ]

  const competencyLevels: CompetencyLevel[] = [
    { competency: "Upravljanje elektroenergetskim sistemima", level: 90 },
    { competency: "Analiza podataka u energetici", level: 85 },
    { competency: "Energetska efikasnost", level: 80 },
  ]

  const filterHistoryByTimeRange = (history: CompetencyHistoryItem[]): CompetencyHistoryItem[] => {
    const now = new Date()
    const pastDate = new Date()
    switch (timeRange) {
      case '6m':
        pastDate.setMonth(now.getMonth() - 6)
        break
      case '1y':
        pastDate.setFullYear(now.getFullYear() - 1)
        break
      case '3y':
        pastDate.setFullYear(now.getFullYear() - 3)
        break
      default:
        return history
    }
    return history.filter(item => new Date(item.date) >= pastDate)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold">Istorija razvoja kompetencija</h1>
      </div>
      
      <div className="flex-grow p-6">
        <Card>
          <CardHeader>
            <CardTitle>Pregled istorije razvoja kompetencija</CardTitle>
            <CardDescription>Pratite napredak i razvoj kompetencija zaposlenih kroz vreme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Select onValueChange={(value) => setSelectedEmployee(employees.find(e => e.id === parseInt(value)) || null)}>
                    <SelectTrigger className="pl-8">
                      <SelectValue placeholder="Izaberite zaposlenog" />
                    </SelectTrigger>
                    <SelectContent>
                      {employees.map((employee) => (
                        <SelectItem key={employee.id} value={employee.id.toString()}>
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarImage src={employee.avatar} alt={employee.name} />
                              <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            {employee.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Vremenski period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6m">Poslednjih 6 meseci</SelectItem>
                    <SelectItem value="1y">Poslednja godina</SelectItem>
                    <SelectItem value="3y">Poslednje 3 godine</SelectItem>
                    <SelectItem value="all">Sve vreme</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedEmployee && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={selectedEmployee.avatar} alt={selectedEmployee.name} />
                      <AvatarFallback>{selectedEmployee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedEmployee.name}</h2>
                      <p className="text-gray-500">{selectedEmployee.position}</p>
                      <p className="text-gray-500">{selectedEmployee.department}</p>
                    </div>
                  </div>

                  <Tabs defaultValue="timeline">
                    <TabsList>
                      <TabsTrigger value="timeline">Vremenska linija</TabsTrigger>
                      <TabsTrigger value="competencies">Pregled kompetencija</TabsTrigger>
                    </TabsList>
                    <TabsContent value="timeline">
                      <div className="space-y-4">
                        {filterHistoryByTimeRange(competencyHistory).map((item) => (
                          <Card key={item.id}>
                            <CardContent className="flex items-center p-4">
                              <div className="mr-4">
                                {item.type === 'Obuka' && <Book className="h-8 w-8 text-blue-500" />}
                                {item.type === 'Sertifikacija' && <Award className="h-8 w-8 text-green-500" />}
                                {item.type === 'Projekat' && <TrendingUp className="h-8 w-8 text-purple-500" />}
                                {item.type === 'Ocena' && <Calendar className="h-8 w-8 text-orange-500" />}
                              </div>
                              <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-semibold">{item.competency}</h3>
                                    <p className="text-sm text-gray-500">{item.details}</p>
                                  </div>
                                  <Badge variant={item.score >= 90 ? "default" : item.score >= 80 ? "secondary" : "destructive"}>
                                    {item.score}%
                                  </Badge>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                  <span className="text-sm text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                                  <Badge variant="outline">{item.type}</Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="competencies">
                      <div className="space-y-4">
                        {competencyLevels.map((comp) => (
                          <div key={comp.competency} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{comp.competency}</span>
                              <span>{comp.level}%</span>
                            </div>
                            <Progress value={comp.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}