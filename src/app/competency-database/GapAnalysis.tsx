"use client";

import { useState } from 'react'
import { AlertTriangle, CheckCircle, TrendingUp, TrendingDown, Zap, Book, Award } from 'lucide-react'
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
import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'

// Dodajte ove tipove na početku fajla
type Position = {
  id: number;
  name: string;
  department: string;
}

type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  avatar: string;
}

type Competency = {
  id: number;
  name: string;
  category: string;
}

type RequiredCompetency = {
  positionId: number;
  competencyId: number;
  requiredLevel: number;
}

type EmployeeCompetency = {
  employeeId: number;
  competencyId: number;
  currentLevel: number;
}

export default function CompetencyDatabase() {
  // Promenite tipove za useState
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)

  const positions: Position[] = [
    { id: 1, name: "Inženjer elektroenergetike", department: "Distribucija" },
    { id: 2, name: "Tehničar za održavanje", department: "Proizvodnja" },
    { id: 3, name: "Analitičar za energetsku efikasnost", department: "Razvoj" },
    { id: 4, name: "Menadžer projekata", department: "Upravljanje" },
    { id: 5, name: "Pravni savetnik", department: "Finansije" },
  ]

  const employees: Employee[] = [
    { id: 1, name: "Ana Petrović", position: "Inženjer elektroenergetike", department: "Distribucija", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%202-gSN7PvwteaPSJD5vgamH5zywzrkGgx.webp" },
    { id: 2, name: "Marko Nikolić", position: "Tehničar za održavanje", department: "Proizvodnja", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Man%20pic-dTKrDztZd2ogCdfQRhNJd3CE42fOYQ.webp" },
    { id: 3, name: "Jovana Đorđević", position: "Analitičar za energetsku efikasnost", department: "Razvoj", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%201-QeeaTOnPFd3iHJGPqO7hdRRS390mI9.webp" },
    { id: 4, name: "Nikola Jovanović", position: "Menadžer projekata", department: "Upravljanje", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man%20pic%202-0kz43JiIZOEkZq3cQTrKGQsRfwOZ4K.webp" },
    { id: 5, name: "Milica Stojanović", position: "Pravni savetnik", department: "Finansije", avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/woman%20pic%203-cmIfb2M5ettI5cGYKxaQbfpoqyTTYG.webp" },
  ]

  const competencies: Competency[] = [
    { id: 1, name: "Upravljanje elektroenergetskim sistemima", category: "Tehničke veštine" },
    { id: 2, name: "Analiza podataka u energetici", category: "Analitičke veštine" },
    { id: 3, name: "Energetska efikasnost", category: "Tehničke veštine" },
    { id: 4, name: "Održavanje elektroenergetskih postrojenja", category: "Tehničke veštine" },
    { id: 5, name: "Zaštita na radu u elektroenergetici", category: "Bezbednost" },
    { id: 6, name: "Obnovljivi izvori energije", category: "Tehničke veštine" },
    { id: 7, name: "Finansijsko planiranje u energetici", category: "Finansije" },
    { id: 8, name: "Upravljanje projektima u energetskom sektoru", category: "Upravljanje" },
    { id: 9, name: "Regulativa u energetici", category: "Pravne veštine" },
    { id: 10, name: "Komunikacija sa korisnicima", category: "Soft skills" },
  ]

  const requiredCompetencies: RequiredCompetency[] = [
    { positionId: 1, competencyId: 1, requiredLevel: 90 },
    { positionId: 1, competencyId: 2, requiredLevel: 80 },
    { positionId: 1, competencyId: 3, requiredLevel: 85 },
    { positionId: 1, competencyId: 6, requiredLevel: 70 },
    { positionId: 1, competencyId: 10, requiredLevel: 75 },
  ]

  const employeeCompetencies: EmployeeCompetency[] = [
    { employeeId: 1, competencyId: 1, currentLevel: 85 },
    { employeeId: 1, competencyId: 2, currentLevel: 75 },
    { employeeId: 1, competencyId: 3, currentLevel: 80 },
    { employeeId: 1, competencyId: 6, currentLevel: 65 },
    { employeeId: 1, competencyId: 10, currentLevel: 70 },
  ]

  // Dodajte tipove za povratne vrednosti funkcija
  const getCompetencyGap = (competencyId: number): { competencyId: number; requiredLevel: number; currentLevel: number; gap: number } | null => {
    if (!selectedPosition || !selectedEmployee) return null;
    const required = requiredCompetencies.find(rc => rc.competencyId === competencyId && rc.positionId === selectedPosition.id)
    const current = employeeCompetencies.find(ec => ec.competencyId === competencyId && ec.employeeId === selectedEmployee.id)
    
    if (!required || !current) return null

    return {
      competencyId,
      requiredLevel: required.requiredLevel,
      currentLevel: current.currentLevel,
      gap: required.requiredLevel - current.currentLevel
    }
  }

  const getOverallGapStatus = (): { status: string; color: string; icon: JSX.Element } => {
    if (!selectedPosition || !selectedEmployee) return { status: 'Nije izabrano', color: 'bg-gray-500', icon: <AlertTriangle className="h-6 w-6" /> };

    const gaps = competencies
      .map(c => getCompetencyGap(c.id))
      .filter(gap => gap !== null) as { gap: number }[]

    const totalGap = gaps.reduce((sum, gap) => sum + gap.gap, 0)
    const averageGap = totalGap / gaps.length

    if (averageGap <= 5) return { status: 'Odlično', color: 'bg-green-500', icon: <CheckCircle className="h-6 w-6" /> }
    if (averageGap <= 10) return { status: 'Dobro', color: 'bg-yellow-500', icon: <AlertTriangle className="h-6 w-6" /> }
    return { status: 'Potrebno unapređenje', color: 'bg-red-500', icon: <AlertTriangle className="h-6 w-6" /> }
  }

  const getRecommendations = (): { competency: string; recommendation: string }[] => {
    if (!selectedPosition || !selectedEmployee) return [];

    const gaps = competencies
      .map(c => getCompetencyGap(c.id))
      .filter(gap => gap !== null && gap.gap > 0)
      .sort((a, b) => b!.gap - a!.gap)

    return gaps.slice(0, 3).map(gap => {
      const competency = competencies.find(c => c.id === gap!.competencyId)!
      return {
        competency: competency.name,
        recommendation: `Unaprediti ${competency.name} za ${gap!.gap}% kroz obuke i projekte.`
      }
    })
  }

  const getRadarChartData = () => {
    if (!selectedPosition || !selectedEmployee) return [];

    return competencies
      .map(c => {
        const gap = getCompetencyGap(c.id)
        if (!gap) return null
        return {
          subject: c.name,
          required: gap.requiredLevel,
          current: gap.currentLevel,
          fullMark: 100
        }
      })
      .filter(data => data !== null)
  }

  return (
    <div>
      <h2>Baza kompetencija</h2>
      <div className="flex flex-col min-h-screen">
        <div className="bg-blue-900 text-white p-6">
          <h1 className="text-2xl font-bold">Gap analiza kompetencija</h1>
        </div>
        
        <div className="flex-grow p-6">
          <Card>
            <CardHeader>
              <CardTitle>Analiza razlika u kompetencijama</CardTitle>
              <CardDescription>Uporedite potrebne kompetencije za poziciju sa trenutnim nivoom kompetencija zaposlenog</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <Select onValueChange={(value) => setSelectedPosition(positions.find(p => p.id === parseInt(value)))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Izaberite poziciju" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position.id} value={position.id.toString()}>
                            {position.name} - {position.department}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-grow">
                    <Select onValueChange={(value) => setSelectedEmployee(employees.find(e => e.id === parseInt(value)))}>
                      <SelectTrigger>
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
                              {employee.name} - {employee.position}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {selectedPosition && selectedEmployee && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
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
                      <div className="text-right">
                        <h3 className="text-xl font-semibold">{selectedPosition.name}</h3>
                        <p className="text-gray-500">{selectedPosition.department}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Ukupna procena</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-2">
                            <div className={`w-12 h-12 rounded-full ${getOverallGapStatus().color} flex items-center justify-center text-white`}>
                              {getOverallGapStatus().icon}
                            </div>
                            <span className="text-2xl font-bold">{getOverallGapStatus().status}</span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Prosečan gap</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-12 w-12 text-blue-500" />
                            <span className="text-2xl font-bold">
                              {(competencies
                                .map(c => getCompetencyGap(c.id))
                                .filter(gap => gap !== null)
                                .reduce((sum, gap) => sum + gap!.gap, 0) / 
                                competencies.filter(c => getCompetencyGap(c.id) !== null).length)
                                .toFixed(1)}%                          </span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Najveći gap</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-2">
                            <TrendingDown className="h-12 w-12 text-red-500" />
                            <span className="text-2xl font-bold">
                              {Math.max(...competencies
                                .map(c => getCompetencyGap(c.id))
                                .filter(gap => gap !== null)
                                .map(gap => gap!.gap))}%
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Vizuelni prikaz gapova</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ResponsiveContainer width="100%" height={400}>
                            <RadarChart data={getRadarChartData()}>
                              <PolarGrid />
                              <PolarAngleAxis dataKey="subject" />
                              <PolarRadiusAxis angle={30} domain={[0, 100]} />
                              <Radar name="Potreban nivo" dataKey="required" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                              <Radar name="Trenutni nivo" dataKey="current" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                            </RadarChart>
                          </ResponsiveContainer>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Top 3 preporuke za razvoj</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            {getRecommendations().map((rec, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                {index === 0 && <Zap className="h-6 w-6 text-yellow-500 flex-shrink-0" />}
                                {index === 1 && <Book className="h-6 w-6 text-blue-500 flex-shrink-0" />}
                                {index === 2 && <Award className="h-6 w-6 text-green-500 flex-shrink-0" />}
                                <span>{rec.recommendation}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Detaljna analiza gapova</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Kompetencija</TableHead>
                              <TableHead>Kategorija</TableHead>
                              <TableHead>Potreban nivo</TableHead>
                              <TableHead>Trenutni nivo</TableHead>
                              <TableHead>Gap</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {competencies.map((competency) => {
                              const gap = getCompetencyGap(competency.id)
                              if (!gap) return null
                              return (
                                <TableRow key={competency.id}>
                                  <TableCell className="font-medium">{competency.name}</TableCell>
                                  <TableCell>{competency.category}</TableCell>
                                  <TableCell>{gap.requiredLevel}%</TableCell>
                                  <TableCell>{gap.currentLevel}%</TableCell>
                                  <TableCell>
                                    <div className="flex items-center space-x-2">
                                      <Progress value={100 - (gap.gap / gap.requiredLevel * 100)} className="w-24" />
                                      <span className={gap.gap > 0 ? "text-red-500" : "text-green-500"}>
                                        {gap.gap > 0 ? `-${gap.gap}%` : `+${Math.abs(gap.gap)}%`}
                                      </span>
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger>
                                            {gap.gap > 10 ? (
                                              <AlertTriangle className="h-4 w-4 text-red-500" />
                                            ) : gap.gap > 0 ? (
                                              <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                            ) : (
                                              <CheckCircle className="h-4 w-4 text-green-500" />
                                            )}
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            {gap.gap > 10 ? (
                                              <p>Potrebno značajno unapređenje</p>
                                            ) : gap.gap > 0 ? (
                                              <p>Potrebno malo unapređenje</p>
                                            ) : (
                                              <p>Kompetencija na zadovoljavajućem nivou</p>
                                            )}
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    </div>
                                  </TableCell>
                                </TableRow>
                              )
                            })}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}