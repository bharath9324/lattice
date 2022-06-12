from django.db import models


class Company(models.Model):
    name=models.CharField(max_length=64)


class Employee(models.Model):
    first_name=models.CharField(max_length=64)
    last_name=models.CharField(max_length=64)
    employee_id=models.CharField(max_length=32)
    current_role=models.CharField(max_length=64)
    level=models.CharField(max_length=64)
    compensation=models.FloatField()
    started_at=models.DateTimeField()
    company=models.ForeignKey(Company, on_delete=models.CASCADE)
    manager=models.ForeignKey('self', on_delete=models.CASCADE)


class FeedBackCycle(models.Model):
	company=models.ForeignKey(Company, on_delete=models.CASCADE)
	cycle_date=models.DateTimeField()
	cycle_name=models.CharField(max_length=64)


class FeedBackCycleQuestions(models.Model):
	question=models.CharField(max_length=1000)
	company = models.ForeignKey(Company, on_delete=models.CASCADE)
	feedback_cycle=models.ForeignKey(FeedBackCycle, on_delete=models.CASCADE)



class FeedBackCycleAnswers(models.Model):
	answer=models.CharField(max_length=1000)
	question=models.ForeignKey(FeedBackCycleQuestions, on_delete=models.CASCADE)
	author=models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='answer_author')
	receiver=models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='answer_reciever')


class Rating(models.Model):
	class RatingOptions(models.TextChoices):
		NI = 'Needs Improvement'
		ME = 'Meets Expectations'
		EE = 'Exceeds Expectations'
		SE = 'Strongly Exceeds Expectations'
	rating=models.CharField(max_length=1000, choices=RatingOptions.choices, default=RatingOptions.ME)
	question=models.ForeignKey(FeedBackCycleQuestions, on_delete=models.CASCADE)
	author=models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='rating_author')
	receiver=models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='rating_reciever')
    
    
