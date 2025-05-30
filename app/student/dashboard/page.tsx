import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  Clock,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Star,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sider";

export default function StudentDashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="flex items-center gap-2 px-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold">EduLearn</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/student/dashboard">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/student/courses">
                    <BookOpen className="h-4 w-4" />
                    <span>My Courses</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/student/calendar">
                    <Calendar className="h-4 w-4" />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/student/messages">
                    <MessageSquare className="h-4 w-4" />
                    <span>Messages</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/student/profile">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/student/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                width={40}
                height={40}
                alt="User avatar"
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">
                  john.doe@example.com
                </span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, John! Here&apos;s your learning summary.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">Browse Courses</Button>
              <Button>Continue Learning</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Courses Enrolled
                </CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">
                  +1 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Completed Courses
                </CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  +1 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Hours Spent
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.5</div>
                <p className="text-xs text-muted-foreground">
                  +12.5 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Certificates
                </CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  +1 from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="in-progress">
              <TabsList className="mb-4">
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
              </TabsList>
              <TabsContent value="in-progress">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {inProgressCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={400}
                          height={220}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4 pb-0">
                        <CardTitle className="text-lg">
                          {course.title}
                        </CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">
                            Progress
                          </span>
                          <span className="text-sm font-medium">
                            {course.progress}%
                          </span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {course.completedLessons} / {course.totalLessons}{" "}
                            lessons
                          </span>
                          <Button size="sm">Continue</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="completed">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {completedCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={400}
                          height={220}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4 pb-0">
                        <CardTitle className="text-lg">
                          {course.title}
                        </CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">
                            Completed on
                          </span>
                          <span className="text-sm font-medium">
                            {course.completedDate}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">
                              {course.rating}
                            </span>
                          </div>
                          <Button size="sm" variant="outline">
                            View Certificate
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="recommended">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {recommendedCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={400}
                          height={220}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4 pb-0">
                        <CardTitle className="text-lg">
                          {course.title}
                        </CardTitle>
                        <CardDescription>{course.instructor}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                            <span className="text-sm font-medium">
                              {course.rating}
                            </span>
                            <span className="text-xs text-muted-foreground ml-1">
                              ({course.reviews} reviews)
                            </span>
                          </div>
                          <span className="text-sm font-bold">
                            ${course.price}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {course.level} • {course.duration}
                          </span>
                          <Button size="sm">Enroll</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

// Sample data
const inProgressCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Smith",
    progress: 65,
    completedLessons: 26,
    totalLessons: 40,
    image: "/images/webdev.jpeg",
  },
  {
    id: 2,
    title: "Data Science and Machine Learning",
    instructor: "Sarah Johnson",
    progress: 32,
    completedLessons: 12,
    totalLessons: 38,
    image: "/placeholder.svg?height=220&width=400",
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Michael Brown",
    progress: 78,
    completedLessons: 18,
    totalLessons: 23,
    image: "/placeholder.svg?height=220&width=400",
  },
];

const completedCourses = [
  {
    id: 4,
    title: "JavaScript Fundamentals",
    instructor: "Emily Davis",
    completedDate: "Mar 15, 2023",
    rating: 4.8,
    image: "/placeholder.svg?height=220&width=400",
  },
  {
    id: 5,
    title: "Introduction to Python Programming",
    instructor: "Robert Wilson",
    completedDate: "Jan 22, 2023",
    rating: 4.9,
    image: "/placeholder.svg?height=220&width=400",
  },
];

const recommendedCourses = [
  {
    id: 6,
    title: "Advanced React Patterns",
    instructor: "Jessica Miller",
    rating: 4.9,
    reviews: 1250,
    price: 89.99,
    level: "Advanced",
    duration: "15 hours",
    image: "/placeholder.svg?height=220&width=400",
  },
  {
    id: 7,
    title: "Mobile App Development with Flutter",
    instructor: "David Thompson",
    rating: 4.7,
    reviews: 980,
    price: 79.99,
    level: "Intermediate",
    duration: "20 hours",
    image: "/placeholder.svg?height=220&width=400",
  },
  {
    id: 8,
    title: "Blockchain Development Fundamentals",
    instructor: "Alex Johnson",
    rating: 4.8,
    reviews: 750,
    price: 94.99,
    level: "Beginner",
    duration: "18 hours",
    image: "/placeholder.svg?height=220&width=400",
  },
];
